// @ts-check
import { defineConfig } from 'astro/config';

// SITE y BASE se pueden sobreescribir al desplegar (p. ej. GitHub Pages en /atl-rosaleda-/).
const site = process.env.SITE_URL ?? 'https://atleticorosaleda.com';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  // Las URLs antiguas de WordPress siguen funcionando: redirigen a la nueva estructura.
  redirects: Object.fromEntries(Object.entries({
    '/inicio/': '/',
    '/senior-federado/': '/equipos/senior-federado/',
    '/juvenil-autonomico/': '/equipos/juvenil-autonomico/',
    '/juvenil-provincial/': '/equipos/juvenil-provincial/',
    '/cadete-femenino/': '/equipos/cadete-femenino/',
    '/senior-23/': '/equipos/senior-asociacion-23/',
    '/senior-asociacion-sub-23-a/': '/equipos/senior-asociacion-sub-23-a/',
    '/senior-asociacion-sub-23-b/': '/equipos/senior-asociacion-sub-23-b/',
    '/nueva-temporada-mismos-valores-atletico-rosaleda-fs-presenta-una-nueva-imagen-con-joma-y-zentral/': '/blog/nueva-temporada-joma-zentral/',
    '/unimos-fuerzas-para-seguir-creciendo-compartiendo-valores-y-disfrutando-del-futbol/': '/blog/malaga-siempre-fuerte/',
    '/campus-futbol-sala-atletico-rosaleda-asociacion-palomeque-2/': '/blog/prebenjamin-campeon-liga-municipal/',
    '/campus-futbol-sala-atletico-rosaleda-asociacion-palomeque/': '/blog/campus-verano-2026/',
  }).map(([desde, hacia]) => [desde, base.replace(/\/$/, '') + hacia])),
});
