// Comprobaciones de calidad sobre el sitio generado (dist/):
// enlaces internos rotos, un solo H1 por página, imágenes con alt, sin "callto:" ni enlaces "#" vacíos.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const BASE = (process.env.BASE_PATH ?? '/').replace(/\/$/, '');
const files = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); });
walk(DIST);

const problems = [];
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const page = '/' + relative(DIST, file);
  if (html.includes('http-equiv="refresh"')) continue; // páginas de redirección
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) problems.push(`${page}: ${h1} H1 (debe haber 1)`);
  for (const [, tag] of html.matchAll(/<img\b([^>]*)>/g)) if (!/\balt=/.test(tag)) problems.push(`${page}: imagen sin alt → ${tag.slice(0, 80)}`);
  if (/callto:/i.test(html)) problems.push(`${page}: enlace callto:`);
  for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]*)"/g)) {
    if (href === '#' || href === '') problems.push(`${page}: enlace vacío "${href}"`);
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    let path = href.split('#')[0].split('?')[0];
    if (BASE && path.startsWith(BASE)) path = path.slice(BASE.length) || '/';
    const target = path.endsWith('/') ? join(DIST, path, 'index.html') : join(DIST, path);
    if (!existsSync(target) && !existsSync(target + '.html')) problems.push(`${page}: enlace roto → ${href}`);
  }
}
console.log(`${files.length} páginas revisadas.`);
if (problems.length) { console.error(problems.join('\n')); process.exit(1); }
console.log('Sin problemas: enlaces internos OK, 1 H1 por página, todas las imágenes con alt, teléfonos con tel:.');
