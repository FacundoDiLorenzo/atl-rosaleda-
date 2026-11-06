# Sistema visual

**Producto**: web de un club de fútbol sala de barrio con más de 300 deportistas. Público: familias que buscan dónde apuntar a sus hijos (móvil, poco tiempo), jugadores y afición, y empresas que podrían patrocinar.
**Trabajo principal de la web**: que una familia encuentre la categoría de su hijo/a y contacte en menos de un minuto.

## Dirección

Cartelería de pabellón: tipografía condensada enorme, negro cálido y el naranja del escudo. La energía viene de la tipografía y las fotos reales del club, no de adornos.

- **Tipografía**: *Big Shoulders Display* (titulares, siempre en mayúsculas, condensada como los marcadores y rótulos de pabellón) + *Instrument Sans* (texto). Escala fluida con `clamp()`.
- **Color** (OKLCH): neutros cálidos teñidos hacia el naranja (`--ink`, `--paper`), nunca gris puro. Naranja del club `--naranja` como acento y fondo de llamadas a la acción; `--naranja-text` (más oscuro) para texto naranja sobre fondo claro con contraste AA.
- **Layout**: alineado a la izquierda, asimétrico, mucho aire entre secciones. Se alternan bandas oscuras y claras para dar ritmo de scroll.
- **Evitado a propósito**: degradados morados, glassmorphism, tarjetas con icono genérico, todo centrado, emojis como iconos.

## Movimiento

Basado en las reglas de diseño de interacción de Emil Kowalski.

| Token | Valor | Uso |
| --- | --- | --- |
| `--ease-out` | `cubic-bezier(0.23, 1, 0.32, 1)` | Entradas, revelados, hover |
| `--ease-drawer` | `cubic-bezier(0.32, 0.72, 0, 1)` | Menú móvil y aviso de cookies (curva tipo iOS) |
| `--dur-press` | 160 ms | Feedback de pulsación (`scale(0.97)`) |
| `--dur-ui` | 220 ms | Hover, color, subrayados |

Reglas que se cumplen en todo el sitio:

- Nunca `ease-in` en UI y nunca `transition: all`; solo se animan `transform`, `opacity` y `clip-path`.
- Las salidas son más rápidas que las entradas (menú: entra en 460 ms, sale en 240 ms).
- Los hover solo existen en dispositivos con puntero fino: `@media (hover: hover) and (pointer: fine)`.
- Escalonado de 40–60 ms entre elementos de una lista; nunca bloquea la interacción.
- Un único momento orquestado: la entrada del hero (la foto se asienta, el titular sube línea a línea desde su máscara).
- `prefers-reduced-motion`: se eliminan desplazamientos y escalados, se conservan los fundidos de opacidad.
- Sin JavaScript todo el contenido es visible (las animaciones de entrada dependen de la clase `.js`).
