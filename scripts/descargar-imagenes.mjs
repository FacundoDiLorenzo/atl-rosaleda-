// Descarga todas las fotos que usa la web desde el WordPress original, las convierte a WebP
// en varios tamaños y las guarda en public/img. Después, src/lib/img.ts las sirve en local
// en lugar de usar el CDN de WordPress.com. Útil si el club deja de tener el WordPress.
//
// Uso: npm i -D sharp && npm run imagenes
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const sharp = (await import('sharp')).default;
const ROOT = new URL('..', import.meta.url).pathname;
const OUT = join(ROOT, 'public/img');
const ANCHOS = [360, 640, 960, 1280, 1920];
mkdirSync(OUT, { recursive: true });

// Busca todas las rutas "AAAA/MM/archivo.ext" en src/
const rutas = new Set();
const walk = (d) => readdirSync(d).forEach((f) => {
  const p = join(d, f);
  if (statSync(p).isDirectory()) return walk(p);
  if (!/\.(ts|astro)$/.test(p)) return;
  const txt = readFileSync(p, 'utf8');
  for (const m of txt.matchAll(/'(20\d\d\/\d\d\/[^']+\.(?:png|jpe?g|webp))'/gi)) rutas.add(m[1]);
  for (const m of txt.matchAll(/p\('[^']+', '([^']+\.png)'/g)) rutas.add(`2026/09/${m[1]}`);
  for (const m of txt.matchAll(/f\('([^']+\.png)'\)/g)) rutas.add(`2026/10/${m[1]}`);
});
walk(join(ROOT, 'src'));

const slug = (p) => p.replace(/\.[a-z0-9]+$/i, '').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
const manifest = {};
for (const ruta of rutas) {
  const res = await fetch(`https://atleticorosaleda.com/wp-content/uploads/${ruta}`);
  if (!res.ok) { console.warn('✗', ruta, res.status); continue; }
  const buf = Buffer.from(await res.arrayBuffer());
  const { width } = await sharp(buf).metadata();
  const hechos = [];
  for (const w of ANCHOS) {
    if (w > width && hechos.length) break;
    await sharp(buf).resize({ width: Math.min(w, width) }).webp({ quality: 78 }).toFile(join(OUT, `${slug(ruta)}-${w}.webp`));
    hechos.push(w);
  }
  manifest[ruta] = hechos;
  console.log('✓', ruta, hechos.join(','));
}
writeFileSync(join(ROOT, 'src/data/imagenes-locales.json'), JSON.stringify(manifest, null, 2));
console.log(`Listo: ${Object.keys(manifest).length} imágenes en public/img.`);
