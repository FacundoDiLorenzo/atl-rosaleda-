# Atlético Rosaleda FS · web

Nueva web del club de fútbol sala Atlético Rosaleda FS (Martiricos, Málaga). Sitio estático hecho con [Astro](https://astro.build): carga rápido, no necesita WordPress ni base de datos y se puede alojar gratis (GitHub Pages, Netlify, Cloudflare Pages) o en cualquier hosting.

## Empezar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run check    # revisa enlaces rotos, un H1 por página, alt en imágenes y teléfonos tel:
```

## Dónde se edita cada cosa

| Quiero cambiar… | Archivo |
| --- | --- |
| Teléfonos, correo, redes, dirección | `src/config.ts` |
| Equipos, plantillas, horarios, años | `src/data/equipos.ts` |
| Entrenadores y directiva | `src/data/entrenadores.ts` |
| Patrocinadores | `src/data/patrocinadores.ts` |
| Noticias del blog | `src/data/noticias.ts` (añadir al principio de la lista) |
| Partidos y resultados | `src/data/partidos.ts` |
| Cifras, valores, FAQ, opiniones, tienda | `src/data/contenido.ts` |
| Colores, tipografías, animaciones | `src/styles/global.css` (ver `DESIGN.md`) |

## Formulario de contacto

Por defecto, el formulario abre el correo del usuario con el mensaje ya escrito para `adrosaleda@gmail.com`. Para que se envíe directamente, creá una cuenta gratuita en un servicio de formularios (por ejemplo [Web3Forms](https://web3forms.com)) y definí `PUBLIC_FORM_ENDPOINT` y `PUBLIC_FORM_ACCESS_KEY` (ver `.env.example`).

Antispam incluido: campo trampa (honeypot), tiempo mínimo de rellenado, límite de un envío por minuto y, opcionalmente, Cloudflare Turnstile (`PUBLIC_TURNSTILE_SITE_KEY`).

## Imágenes

Las fotos siguen alojadas en el WordPress actual, pero se sirven a través del CDN de imágenes de WordPress.com, que las redimensiona y las entrega en WebP/AVIF (el logo pasa de 680 KB a unos 10 KB en la cabecera). Si el club deja WordPress, `npm i -D sharp && npm run imagenes` descarga todas las fotos y las guarda optimizadas en `public/img`.

## Publicar

- **GitHub Pages**: en *Settings → Pages* elegí *GitHub Actions*. Cada push a `main` publica la web (`.github/workflows/deploy.yml`).
- **Dominio propio**: apuntá `atleticorosaleda.com` al hosting y quitá `BASE_PATH` del workflow. Las URLs antiguas de WordPress (`/senior-federado/`, `/juvenil-autonomico/`, noticias…) redirigen solas a las nuevas.
