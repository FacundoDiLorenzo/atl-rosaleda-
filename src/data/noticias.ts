// Noticias del blog. Para publicar una nueva, añadí un objeto al principio de la lista.
// Bloques: { h: 'Subtítulo' } | { p: 'Párrafo' } | { ul: ['punto', ...] }

export type Bloque = { h: string } | { p: string } | { ul: string[] };

export interface Noticia {
  slug: string;
  titulo: string;
  fecha: string; // ISO
  extracto: string;
  imagen?: string;
  imagenAlt?: string;
  categoria: string;
  cuerpo: Bloque[];
}

export const NOTICIAS: Noticia[] = [
  {
    slug: 'nueva-temporada-joma-zentral',
    titulo: 'Nueva temporada, mismos valores: presentamos nueva imagen con JOMA y ZENTRAL',
    fecha: '2026-07-23',
    categoria: 'Club',
    extracto:
      'JOMA sigue siendo nuestra marca deportiva y ZENTRAL se suma para aportar diseños exclusivos y una identidad visual propia.',
    imagen: '2026/07/187251d8-818b-4e89-b7f6-8a6c15a37e14.jpg',
    imagenAlt: 'Presentación de la nueva imagen del Atlético Rosaleda FS con JOMA y ZENTRAL',
    cuerpo: [
      { p: 'En el Atlético Rosaleda FS comenzamos una nueva temporada con la misma ilusión de siempre, pero con nuevos retos y una identidad aún más definida.' },
      { p: 'Porque crecer no consiste únicamente en competir. Crecer también significa innovar, evolucionar y seguir construyendo un club con personalidad propia.' },
      { h: 'Una apuesta por la innovación' },
      { p: 'Esta temporada damos un paso más en nuestro proyecto deportivo con una forma de trabajar innovadora y exclusiva, incorporando dos marcas que comparten nuestra filosofía y nos acompañarán durante toda la temporada.' },
      { p: 'Una alianza que refuerza nuestro compromiso con la calidad, la innovación y la mejora constante, ofreciendo a nuestros jugadores y familias una experiencia cada vez más completa.' },
      { h: 'JOMA, calidad y confianza temporada tras temporada' },
      { p: 'JOMA continuará siendo nuestra marca deportiva de referencia. Su calidad, comodidad y fiabilidad la han convertido en una parte fundamental del club, acompañándonos durante varias temporadas y ganándose la confianza de jugadores, entrenadores y familias.' },
      { h: 'Damos la bienvenida a ZENTRAL' },
      { p: 'La gran novedad de esta temporada es la incorporación de ZENTRAL, una marca que llega para aportar un aire fresco a la imagen del club.' },
      { p: 'Su propuesta nos permitirá ofrecer diseños exclusivos, mayor variedad y una identidad visual diferenciadora, siempre adaptándonos a las necesidades de nuestros jugadores y reforzando la personalidad del Atlético Rosaleda FS.' },
      { h: 'Lo mejor está por llegar' },
      { p: 'Muy pronto presentaremos nuestra nueva equipación oficial, creada en exclusiva para el Atlético Rosaleda FS. Un diseño que representará nuestros colores, nuestros valores y el camino que queremos seguir recorriendo como club.' },
      { h: 'Seguimos creciendo juntos' },
      { p: 'Cada paso que damos tiene un mismo objetivo: ofrecer la mejor experiencia posible a nuestros jugadores y seguir construyendo un club del que todos nos sintamos orgullosos. Porque crecer no es solo competir. Es innovar, es diferenciarse y es seguir construyendo, día a día, un club con identidad propia.' },
    ],
  },
  {
    slug: 'malaga-siempre-fuerte',
    titulo: 'Unimos fuerzas con Málaga Siempre Fuerte',
    fecha: '2026-07-01',
    categoria: 'Inclusión',
    extracto:
      'Málaga Siempre Fuerte y Atlético Rosaleda Genuine unen sus caminos: un mismo equipo que entrenará y competirá en fútbol 7 y fútbol sala.',
    imagen: '2026/07/WhatsApp-Image-2026-07-01-at-08.39.04.jpeg',
    imagenAlt: 'Jugadores de Málaga Siempre Fuerte y del Atlético Rosaleda Genuine juntos',
    cuerpo: [
      { p: 'En el Atlético Rosaleda FS estamos muy felices de anunciar el comienzo de una nueva etapa llena de ilusión, compromiso y nuevos retos.' },
      { p: 'A partir de esta temporada, Málaga Siempre Fuerte y Atlético Rosaleda Genuine unen sus caminos para seguir creciendo juntos y demostrar que el fútbol es mucho más que un deporte: es una herramienta de inclusión, superación y compañerismo.' },
      { h: 'Un proyecto que sigue creciendo' },
      { p: 'Desde esta temporada, Málaga Siempre Fuerte deja de formar parte del C.D. Carlinda para integrarse en la familia del Atlético Rosaleda FS, donde continuará desarrollando un proyecto deportivo y humano basado en la igualdad de oportunidades, el respeto y la pasión por el fútbol.' },
      { h: 'Una formación más completa' },
      { p: 'Nuestro equipo, formado por personas con diversidad funcional, entrenará y competirá en las modalidades de fútbol 7 y fútbol sala. Como gran novedad, todos los jugadores formarán parte de un mismo equipo que trabajará ambas disciplinas, con una formación más completa y adaptada a sus capacidades.' },
      { h: 'Mucho más que fútbol' },
      { p: 'Creemos firmemente que el deporte tiene el poder de unir personas, derribar barreras y crear oportunidades. Este proyecto es el comienzo de un camino compartido para construir un club cada vez más inclusivo, cercano y comprometido con las personas.' },
      { p: '¡Bienvenidos a vuestra nueva casa! Juntos seguiremos creciendo como equipo y como familia.' },
    ],
  },
  {
    slug: 'prebenjamin-campeon-liga-municipal',
    titulo: 'Nuestro Prebenjamín, campeón de la Liga Municipal de Málaga',
    fecha: '2026-06-02',
    categoria: 'Escuela',
    extracto:
      'Una temporada brillante culminada con una final emocionante: empate 1-1 y victoria desde el punto de penalti.',
    imagen: '2026/06/WhatsApp-Image-2026-06-08-at-15.28.01-1024x763.jpeg',
    imagenAlt: 'El equipo Prebenjamín del Atlético Rosaleda celebra el título de la Liga Municipal',
    cuerpo: [
      { p: 'En Atlético Rosaleda FS estamos de celebración. El 30 de mayo de 2026 quedará para siempre en el recuerdo del club: nuestro equipo Prebenjamín se proclamó campeón de la Liga Municipal de Málaga 2025/2026.' },
      { h: 'Una temporada para enmarcar' },
      { p: 'Dirigidos por David, nuestros pequeños futbolistas completaron una campaña brillante, terminando primeros en la fase de grupos y demostrando jornada tras jornada compromiso, compañerismo y nivel competitivo.' },
      { h: 'Una final emocionante hasta el último segundo' },
      { p: 'Tras un partido muy igualado que terminó 1-1, el título se decidió desde el punto de penalti, donde nuestros prebenjamines demostraron una enorme personalidad para levantar la copa.' },
      { h: 'Mucho más que un campeonato' },
      { p: 'Este título es el reflejo del esfuerzo diario, el respeto y la pasión por el fútbol sala que este grupo ha demostrado desde el primer entrenamiento. Gracias a los jugadores, a su entrenador David y a las familias. ¡Enhorabuena, campeones!' },
    ],
  },
  {
    slug: 'campus-verano-2026',
    titulo: 'Campus de Fútbol Sala Atlético Rosaleda – Asociación Palomeque 2026',
    fecha: '2026-05-21',
    categoria: 'Campus',
    extracto:
      'Un verano de fútbol, diversión y nuevas amistades para niños y niñas de 4 a 15 años, con grupos reducidos y actividades de agua.',
    imagen: '2026/05/Diseno-sin-titulo-2026-06-02T220406.756-819x1024.png',
    imagenAlt: 'Cartel del Campus de Fútbol Sala Atlético Rosaleda – Asociación Palomeque 2026',
    cuerpo: [
      { p: 'Este verano llega una nueva edición del Campus de Fútbol Sala Atlético Rosaleda – Asociación Palomeque: unas semanas para combinar deporte, aprendizaje y diversión en un entorno seguro y adaptado a cada edad.' },
      { h: '¿Por qué elegir nuestro campus?' },
      { ul: ['Tecnificación adaptada a cada edad y nivel', 'Entrenadores y monitores cualificados', 'Grupos reducidos y atención personalizada', 'Mini ligas y competiciones', 'Juegos de agua y actividades recreativas', 'Camiseta oficial del campus incluida', 'Invitados sorpresa'] },
      { h: '¿A quién va dirigido?' },
      { p: 'A niños y niñas de entre 4 y 15 años, practiquen ya fútbol sala o quieran iniciarse. Organizamos los grupos por edad y nivel para que todos disfruten y progresen.' },
      { h: 'Actividades' },
      { ul: ['Tecnificación individual y mejora técnico-táctica', 'Circuitos de agilidad, coordinación y velocidad', 'Mini ligas, King League y retos deportivos', 'Gymkanas, juegos de agua y pistas deslizantes', 'Dinámicas de convivencia, con zonas de sombra'] },
      { h: 'Información importante' },
      { ul: ['Aplicar crema solar antes de asistir', 'Traer botella de agua', 'Traer desayuno para media mañana', 'Ropa deportiva cómoda'] },
      { p: 'Las plazas son limitadas y se asignaron por orden de inscripción (fecha límite: 15 de junio de 2026).' },
    ],
  },
];
