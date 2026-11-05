/**
 * Imágenes optimizadas.
 *
 * Las fotos originales del club son PNG/JPG de hasta 4 MB. En lugar de servirlas tal cual,
 * pasan por el CDN de imágenes de WordPress.com (Photon), que las redimensiona y las entrega
 * en WebP/AVIF según el navegador. Así cada imagen pesa entre 20 y 120 KB.
 *
 * Si algún día el club deja WordPress, ejecutá `npm run imagenes`: descarga todas las fotos,
 * genera las variantes WebP en /public/img y cambia IMAGE_MODE a "local".
 */
import manifest from '../data/imagenes-locales.json';

const ORIGEN = 'atleticorosaleda.com/wp-content/uploads/';
export const ANCHOS = [360, 640, 960, 1280, 1920] as const;

const local = manifest as Record<string, number[]>;
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

function slug(path: string) {
  return path.replace(/\.[a-z0-9]+$/i, '').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
}

export function src(path: string, w: number, h?: number) {
  if (local[path]) {
    const disponibles = local[path];
    const mejor = disponibles.find((a) => a >= w) ?? disponibles[disponibles.length - 1];
    return `${base}/img/${slug(path)}-${mejor}.webp`;
  }
  const params = new URLSearchParams({ w: String(w), quality: '78', strip: 'all' });
  if (h) {
    params.delete('w');
    params.set('resize', `${w},${h}`);
  }
  return `https://i0.wp.com/${ORIGEN}${path}?${params}`;
}

export function srcset(path: string, max = 1920, ratio?: number) {
  return ANCHOS.filter((a) => a <= max)
    .map((a) => `${src(path, a, ratio ? Math.round(a / ratio) : undefined)} ${a}w`)
    .join(', ');
}
