/** Antepone la ruta base del despliegue (p. ej. /atl-rosaleda-/ en GitHub Pages). */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path: string) => (path.startsWith('http') || path.startsWith('#') ? path : `${BASE}${path}`);
