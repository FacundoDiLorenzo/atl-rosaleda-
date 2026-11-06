// Datos generales del club. Editar aquí cambia toda la web.

export const CLUB = {
  nombre: 'Atlético Rosaleda FS',
  nombreLegal: 'CD Atlético Rosaleda FS',
  cif: 'G02727212',
  lema: 'Latiendo desde Martiricos',
  fundacion: 2015,
  email: 'adrosaleda@gmail.com',
  domicilioLegal: 'Plaza Conde de Ferrería 8, 5º D, 29009 Málaga',
  sede: {
    nombre: 'Pista de Martiricos',
    detalle: 'Frente al Colegio Ciudad de Mobile, Palma-Palmilla, 29009 Málaga',
    mapsQuery: 'Pista deportiva Martiricos, Málaga',
  },
} as const;

/** Teléfonos con formato `tel:` (antes eran `callto:` y no funcionaban en móvil). */
export const CONTACTOS = [
  { nombre: 'José Castillo', cargo: 'Presidente', telefono: '+34658346922', visible: '658 34 69 22' },
  { nombre: 'José Morente', cargo: 'Administración', telefono: '+34637709567', visible: '637 70 95 67' },
  { nombre: 'Cristina Fernández', cargo: 'Secretaría', telefono: '+34628598650', visible: '628 59 86 50' },
  { nombre: 'Álvaro Mañas', cargo: 'Entrenador', telefono: '+34663221495', visible: '663 22 14 95' },
] as const;

export const REDES = {
  instagram: { url: 'https://www.instagram.com/atl_rosaledaclinicasrincon/', usuario: '@atl_rosaledaclinicasrincon' },
  facebook: { url: 'https://www.facebook.com/adrosaleda', usuario: 'adrosaleda' },
  tiktok: { url: 'https://www.tiktok.com/@atl_rosaleda', usuario: '@atl_rosaleda' },
  whatsapp: { url: 'https://wa.link/4sou5v', usuario: 'WhatsApp del club' },
} as const;

/**
 * Formulario de contacto.
 * - FORM_ENDPOINT: URL que recibe el POST (Web3Forms, Formspree, Netlify Forms, un PHP propio...).
 *   Si está vacío, el formulario abre el correo del usuario con el mensaje ya escrito.
 * - FORM_ACCESS_KEY: clave pública del servicio, si la pide (Web3Forms la llama access_key).
 * - TURNSTILE_SITE_KEY: clave pública de Cloudflare Turnstile (opcional, antispam adicional).
 */
export const FORMULARIO = {
  endpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
  accessKey: import.meta.env.PUBLIC_FORM_ACCESS_KEY ?? '',
  turnstileSiteKey: import.meta.env.PUBLIC_TURNSTILE_SITE_KEY ?? '',
} as const;

export const NAV = [
  { href: '/el-club/', label: 'El club' },
  { href: '/equipos/', label: 'Equipos' },
  { href: '/competicion/', label: 'Competición' },
  { href: '/patrocinadores/', label: 'Patrocinadores' },
  { href: '/catalogo/', label: 'Tienda' },
  { href: '/blog/', label: 'Noticias' },
] as const;
