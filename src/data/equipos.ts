// Equipos del club. Cada equipo genera su propia página en /equipos/<slug>/.
// Las fotos son rutas dentro de wp-content/uploads del WordPress original.

export type Grupo = 'escuela' | 'cantera' | 'senior' | 'inclusivo' | 'femenino';

export interface Persona {
  nombre: string;
  rol?: string;
  foto?: string;
}

export interface Equipo {
  slug: string;
  nombre: string;
  corto: string;
  grupo: Grupo;
  anios?: string;
  competicion?: string;
  foto?: string;
  resumen: string;
  horario?: { dias: string; hora: string; lugar?: string }[];
  tecnicos?: Persona[];
  jugadores?: Persona[];
  captacion?: boolean;
  destacado?: string;
}

export const GRUPOS: Record<Grupo, { titulo: string; texto: string }> = {
  escuela: {
    titulo: 'Escuela',
    texto: 'Los primeros pasos con balón. Juego, coordinación y valores para que cada niño y niña disfrute mientras aprende.',
  },
  cantera: {
    titulo: 'Cantera',
    texto: 'Formación técnica y táctica con competición real. Aquí se construyen los jugadores del primer equipo.',
  },
  femenino: {
    titulo: 'Femenino',
    texto: 'Un espacio para que cada jugadora crezca técnica y personalmente compartiendo su pasión por el fútbol sala.',
  },
  senior: {
    titulo: 'Senior',
    texto: 'Del primer equipo federado a los equipos de asociación. Competimos con la misma identidad en todas las ligas.',
  },
  inclusivo: {
    titulo: 'Inclusivo',
    texto: 'Fútbol para todas las personas. Igualdad de oportunidades, respeto y pasión por el juego.',
  },
};

const p = (nombre: string, foto?: string, rol?: string): Persona => ({ nombre, foto: foto ? `2026/09/${foto}` : undefined, rol });

export const EQUIPOS: Equipo[] = [
  // ---------- ESCUELA ----------
  {
    slug: 'iniciacion',
    nombre: 'Iniciación',
    corto: 'Iniciación',
    grupo: 'escuela',
    anios: '2023 en adelante',
    foto: '2026/05/BABY.jpg',
    resumen:
      'La primera toma de contacto con el balón. Sesiones cortas basadas en el juego, la psicomotricidad y la diversión, pensadas para los más pequeños de la casa.',
    captacion: true,
  },
  {
    slug: 'baby',
    nombre: 'Baby',
    corto: 'Baby',
    grupo: 'escuela',
    anios: '2022 · 2021',
    foto: '2026/05/BABY.jpg',
    resumen:
      'Coordinación, equilibrio y primeros gestos técnicos a través del juego. Aprenden a compartir pista, a respetar turnos y a celebrar en equipo.',
    horario: [{ dias: 'Lunes', hora: '17:10 – 18:10' }],
    captacion: true,
  },
  {
    slug: 'prebenjamin',
    nombre: 'Prebenjamín Municipal',
    corto: 'Prebenjamín',
    grupo: 'escuela',
    anios: '2020 · 2019',
    competicion: 'Liga Municipal de Málaga',
    foto: '2026/05/PREBENJAMIN-1.jpg',
    resumen:
      'Primeros partidos de competición en la Liga Municipal. Trabajamos conducción, pase y orientación en pista sin perder el componente lúdico.',
    horario: [{ dias: 'Horario especial', hora: '17:15 – 18:30', lugar: 'Pista Colegio Manuel Altolaguirre' }],
    destacado: 'Campeones de la Liga Municipal de Málaga 2025/26',
    captacion: true,
  },
  {
    slug: 'benjamin',
    nombre: 'Benjamín Asociación y Municipal',
    corto: 'Benjamín',
    grupo: 'escuela',
    anios: '2018 · 2017',
    competicion: 'Liga de Asociación y Liga Municipal',
    foto: '2026/05/BENJAMIN-scaled.jpg',
    resumen:
      'Consolidamos la técnica individual y empezamos a entender el juego colectivo: apoyos, desmarques y primeras nociones de defensa.',
    horario: [{ dias: 'Martes y jueves', hora: '17:00 – 18:00' }],
    captacion: true,
  },
  {
    slug: 'alevin',
    nombre: 'Alevín Asociación y Municipal',
    corto: 'Alevín',
    grupo: 'escuela',
    anios: '2016 · 2015',
    competicion: 'Liga de Asociación y Liga Municipal',
    foto: '2026/05/ALEVIN.jpg',
    resumen:
      'Etapa clave del aprendizaje: toma de decisiones, juego posicional y especialización de porteros. Más exigencia, mismo ambiente familiar.',
    horario: [{ dias: 'Lunes', hora: '18:15 – 19:15' }],
    captacion: true,
  },

  // ---------- CANTERA ----------
  {
    slug: 'infantil',
    nombre: 'Infantil Asociación y Municipal',
    corto: 'Infantil',
    grupo: 'cantera',
    anios: '2014 · 2013',
    competicion: 'Liga de Asociación y Liga Municipal',
    foto: '2026/05/INFANTIL.jpg',
    resumen:
      'Táctica, intensidad y compromiso con el grupo. Preparamos a los jugadores para dar el salto a la competición federada.',
    horario: [{ dias: 'Martes y jueves', hora: '18:00 – 19:30' }],
    captacion: true,
  },
  {
    slug: 'cadete-masculino',
    nombre: 'Cadete Federado Masculino',
    corto: 'Cadete masculino',
    grupo: 'cantera',
    anios: '2012 · 2011',
    competicion: 'Liga federada · Federación Andaluza de Fútbol',
    foto: '2026/06/CADETE-FEDERADO-2-e1780952583987.jpg',
    resumen:
      'Primer contacto con la competición federada. Sistemas de juego, estrategia a balón parado y hábitos de deportista.',
    horario: [{ dias: 'Lunes', hora: '19:00 – 20:30' }],
    captacion: true,
  },
  {
    slug: 'juvenil-autonomico',
    nombre: 'Juvenil Autonómico',
    corto: 'Juvenil Autonómico',
    grupo: 'cantera',
    anios: '2010 · 2009 · 2008',
    competicion: 'Liga Autonómica Juvenil · Federación Andaluza de Fútbol',
    foto: '2026/06/JUVENIL-AUTONOMICO.jpg',
    resumen:
      'Nuestro juvenil de referencia. Compite a nivel andaluz y es la puerta de entrada al primer equipo.',
    tecnicos: [
      p('Adebajo Akeem', 'adebajo-akeem-primer-entrenador-e1790236411960.png', '1º entrenador'),
      p('Víctor Villar', 'victor-villar-segundo-entrenador-e1790236449992.png', '2º entrenador'),
    ],
    jugadores: [
      p('Raúl de Haro', 'RAUL-DE-HARO-e1790236532500.png'),
      p('Álvaro Vera', 'alvaro-vera-e1790236519893.png'),
      p('Adrián Navarro', 'ADRIAN-NAVARRO-e1790236631804.png'),
      p('Ale Pérez', 'ALE-PEREZ-e1790236642777.png'),
      p('Alejandro Carmona', 'ALEJANDRO-CARMONA-e1790236658443.png'),
      p('Álvaro Gil', 'ALVARO-GIL-e1790236669273.png'),
      p('Antonio García', 'ANTONIO-GARCIA-e1790236857322.png'),
      p('David Campos', 'DAVID-CAMPOS-e1790236884199.png'),
      p('Daniel González', 'daniel-gonzalez-e1790236906799.png'),
      p('David Soto', 'DAVID-SOTO-e1790237129355.png'),
      p('Joel Villa', 'JOEL-VILLA-e1790237151802.png'),
      p('Mario Dionisio', 'MARIO-DIONISIO-e1790237226816.png'),
      p('Sergio Gámez', 'SERGIO-GAMEZ-e1790238654432.png'),
    ],
  },
  {
    slug: 'juvenil-provincial',
    nombre: 'Juvenil Provincial',
    corto: 'Juvenil Provincial',
    grupo: 'cantera',
    anios: '2010 · 2009 · 2008',
    competicion: 'Liga Provincial Juvenil · Málaga',
    foto: '2026/06/JUVENIL-PROVINCIAL-e1780952527157.jpg',
    resumen: 'Segundo equipo juvenil federado. Minutos de calidad y crecimiento para toda la plantilla.',
    tecnicos: [
      p('Antonio Corpas', 'CORPAS-e1790434848784.png', 'Cuerpo técnico'),
      p('Pedro Corpas', 'PEDRO-CORPAS-e1790241542644.png', 'Cuerpo técnico'),
    ],
    jugadores: [
      p('José Daniel', 'JOSE-DANIEL-e1790241568429.png'),
      p('Abdellatif Guinou', 'ABDELLATIF-GUINOU-e1790241591442.png'),
      p('Adrián Moreno', 'ADRIAN-MORENO-e1790241620432.png'),
      p('Brayhan Keita', 'BRAYHAN-KEITA-e1790241671953.png'),
      p('David Cohen', 'DAVID-COHEN-e1790241694945.png'),
      p('Excel Daniel', 'EXCEL-DANIEL-e1790241721458.png'),
      p('Fali López', 'FALI-LOPEZ-e1790241746636.png'),
      p('Iván Parras', 'IVAN-PARRAS-e1790241767655.png'),
      p('Josué Jiménez', 'JOSUE-JIMENEZ-e1790241788252.png'),
      p('Juan Ordóñez', 'JUAN-ORDONEZ-e1790241822783.png'),
      p('Lionel Cortés', 'LIONEL-CORTES-e1790241843312.png'),
      p('Santino Stefano', 'SANTINO-STEFANO-e1790241889828.png'),
      p('Sergio Cobos', 'SERGIO-COBOS-e1790241924693.png'),
    ],
  },
  {
    slug: 'juvenil-asociacion',
    nombre: 'Juvenil Asociación A y B',
    corto: 'Juvenil Asociación',
    grupo: 'cantera',
    anios: '2010 · 2009 · 2008',
    competicion: 'Liga de Asociación',
    foto: '2026/05/JUVENIL-ASOCIACION-A.jpg',
    resumen: 'Dos equipos juveniles de asociación para que nadie se quede sin jugar. Competición, amistad y compromiso.',
    captacion: true,
  },

  // ---------- FEMENINO ----------
  {
    slug: 'cadete-femenino',
    nombre: 'Cadete Federado Femenino',
    corto: 'Cadete femenino',
    grupo: 'femenino',
    competicion: 'Liga federada femenina · Federación Andaluza de Fútbol',
    foto: '2026/06/CADETE-FEDERADO-2-e1780952583987.jpg',
    resumen:
      'Nuestro proyecto femenino crece cada temporada. Buscamos jugadoras con ganas de aprender, competir y formar parte de una familia.',
    captacion: true,
    tecnicos: [
      p('Álvaro Mañas', 'ALVARO-MANAS-PRIMER-ENTRENADOR--e1789508441633.png', '1º entrenador'),
      p('David Sánchez', 'DAVID-SANCHEZ-2-entrenador--e1789508452345.png', '2º entrenador'),
    ],
    jugadores: [
      p('Lorena Mena', 'LORENA-e1789506791422.png'),
      p('Ainhoa Arjona', 'AINHOA-.-A-e1789506982966.png'),
      p('Antonella Medina', 'ANTONELLA-e1789506972254.png'),
      p('Carla Lima', 'CARLA-e1789506943596.png'),
      p('Carmen Báez', 'CARMEN-e1789506931566.png'),
      p('Emma Haglund', 'EMMA-e1789506916753.png'),
      p('Esperanza Serrano', 'ESPERANZA-e1789506905123.png'),
      p('Laura Gómez', 'LAURA-e1789506894142.png'),
      p('Maira Báez', 'MAIRA-e1789506809881.png'),
      p('María Cobos', 'MARIA-e1789506835539.png'),
      p('Marta Guardeño', 'MARTA-e1789506850629.png'),
      p('Martina Gallardo', 'MARTINA-e1789506865573.png'),
      p('Nona Fernández', 'NONA-e1789506878788.png'),
    ],
  },

  // ---------- SENIOR ----------
  {
    slug: 'senior-federado',
    nombre: 'Senior Federado',
    corto: 'Senior Federado',
    grupo: 'senior',
    competicion: '2ª Andaluza Senior · Federación Andaluza de Fútbol',
    foto: '2026/06/SENIOR-FEDERADO-2-e1780952915446.jpg',
    resumen:
      'El primer equipo. Compite en 2ª Andaluza y juega como local en el Pabellón Forus Trinidad. Es el espejo en el que se mira toda la cantera.',
    tecnicos: [
      p('Diego Quintanilla', 'DIEGO-QUINTANILLA-PRIMER-ENTRENADOR-e1789508080159.png', '1º entrenador'),
      p('José Morente', 'JOSE-MORENTE-SEGUNDO-ENTRENADOR-e1789508067718.png', '2º entrenador'),
    ],
    // Plantilla sin duplicados: en la web anterior Adrián Delgado salía 4 veces y Diego Quintanilla 2.
    jugadores: [
      p('Sergio Gallegos', 'SERGIO-GALLEGOS-e1789495983186.png'),
      p('Manuel Jiménez', 'MANUEL-JIMENEZ-e1789496027836.png'),
      p('Adrián Delgado', 'ADRIAN-DELGADO-e1789496011706.png'),
      p('Sergio Podadera', 'SERGIO-PODADERA-e1789503395681.png'),
      p('José Castillo', 'JOSE-CASTILLO-e1789503411510.png'),
      p('Víctor Ruiz', 'VICTOR-RUIZ-e1789503440865.png'),
      p('Ale Hernández', 'ALE-HERNANDEZ-e1789503452526.png'),
      p('Antonio Alonso', 'ANTONIO-ALONSO-e1789503465368.png'),
      p('Anto Romero', 'ANTO-ROMERO-e1789503477561.png'),
      p('Juan García', 'JUAN-GARCIA-e1789503557583.png'),
      p('Carlos Gago', 'CARLOS-GAGO-e1789503573256.png'),
      p('Víctor Fuentes', 'VICTOR-FUENTES-e1789503604837.png'),
      p('Facundo Di Lorenzo', 'FACUNDO-DI-LORENZO-e1789503585690.png'),
      p('Pablo Gómez', 'PABLO-GOMEZ-e1789503615807.png'),
    ],
  },
  {
    slug: 'senior-asociacion-23',
    nombre: 'Senior Asociación +23',
    corto: 'Senior +23',
    grupo: 'senior',
    competicion: 'Liga de Asociación',
    foto: '2026/06/SENIOR-ASOCIACION-A-1-e1780952882256.jpg',
    resumen: 'Experiencia, compromiso y buen ambiente. El equipo de asociación para mayores de 23 años.',
    jugadores: [
      p('Nacho Palma', 'NACHO-PALMA-e1789751395262.png'),
      p('Raúl Jiménez', 'RAUL-JIMENEZ-e1789751466114.png'),
      p('Nacho Alcaraz', 'NACHO-ALCARAZ-e1789751488475.png'),
      p('José Luis Solís', 'JOSE-LUIS-SOLIS-e1789751509104.png'),
      p('Ale Gaspar', 'ALE-GASPAR-e1789751545674.png'),
      p('Alberto Fernández', 'ALBERTO-FERNANDEZ--e1789751534937.png'),
      p('Ale Pitarch', 'ALE-PITARCH-e1789751586375.png'),
      p('Ibra El Oiriachi', 'IBRA-EL-OIRIACHI-e1789751624312.png'),
      p('Isaac Fernández', 'ISAAC-FERNANDEZ-e1789751663943.png'),
      p('José Fernández', 'JOSE-FERNANDEZ-e1789751686603.png'),
      p('Juanjo Garrido', 'JUANJO-GARRIDO-e1789751710478.png'),
      p('Rafa Torreblanca', 'RAFA-TORREBLANCA-e1789751754600.png'),
      p('Walid Sendbad', 'WALID-SENDBAD-e1789751773417.png'),
      p('Rubén Redondo', 'RUBEN-REDONDO-e1789752198706.png'),
      p('Hilario Caro', 'HILARIO-CARO-e1789751648399.png'),
    ],
  },
  {
    slug: 'senior-asociacion-sub-23-a',
    nombre: 'Senior Asociación Sub-23 A',
    corto: 'Sub-23 A',
    grupo: 'senior',
    competicion: 'Liga de Asociación',
    foto: '2026/06/SENIOR-ASOCIACION-A-1-e1780952882256.jpg',
    resumen: 'Jóvenes que dan el salto a la categoría absoluta con minutos, exigencia y acompañamiento.',
    tecnicos: [
      p('José Castillo', 'jose-castillo-primer-entrenador-e1790439185157.png', '1º entrenador'),
      p('Álvaro Mañas', 'ALVARO-MANAS-SEGUNDO-ENTRENADOR-e1790439196148.png', '2º entrenador'),
    ],
    jugadores: [
      p('Benjamín Ocampos', 'benjamin-ocampos-e1790439237810.png'),
      p('Manu Jiménez', 'manu-jimenez-e1790439262429.png'),
      p('Alberto Gallego', 'alberto-gallego-e1790439286288.png'),
      p('Álvaro García', 'alvaro-garcia-e1790439313805.png'),
      p('Ayoub El Khoddar', 'ayoub-el-khoddar-e1790439325484.png'),
      p('David Sánchez', 'david-sanchez-e1790439367194.png'),
      p('George Moreno', 'george-moreno-e1790439391855.png'),
      p('Iván Molina', 'ivan-molina-e1790439411320.png'),
      p('Jorge Orozco', 'jorge-orozco-e1790439437639.png'),
      p('Miguel Cobos', 'miguel-cobos-e1790439467964.png'),
      p('Juanmi Aranda', 'juanmi-aranda-e1790439487697.png'),
      p('Ricardo Rea', 'ricardo-rea-e1790439508645.png'),
      p('Rubén Porras', 'ruben-porras-e1790439540911.png'),
      p('Víctor Arangurem', 'victor-arangurem-e1790439577207.png'),
    ],
  },
  {
    slug: 'senior-asociacion-sub-23-b',
    nombre: 'Senior Asociación Sub-23 B',
    corto: 'Sub-23 B',
    grupo: 'senior',
    competicion: 'Liga de Asociación',
    foto: '2026/06/SENIOR-ASOCIACION-B-2.jpg',
    resumen: 'Segundo equipo sub-23 de asociación. Mucho talento joven y un vestuario con hambre.',
    tecnicos: [
      p('Ale Baena', 'ALE-BAENA-1-e1790440408220.png', '1º entrenador'),
      p('Francis Moreno', 'FRANCIS-2-e1790440420851.png', '2º entrenador'),
    ],
    jugadores: [
      p('Rafael López', 'RAFAEL-LOPEZ-e1790440667714.png'),
      p('Adrián López', 'ADRIAN-LOPEZ-e1790440679888.png'),
      p('Aiman Makhlouf', 'AIMAN-makhlouf-e1790440690201.png'),
      p('Aldan San Martín', 'ALDAN-SAN-MARTIN-e1790440700580.png'),
      p('Alejandro Martín', 'ALEJANDRO-MARTIN-e1790440710294.png'),
      p('Alejandro Trompo', 'ALEJANDRO-TROMPO-e1790440720742.png'),
      p('Ángel Jiménez', 'ANGEL-JIMENEZ-e1790440730249.png'),
      p('David Castillo', 'DAVID-CASTILLO-e1790440740220.png'),
      p('Hugo Cebrián', 'HUGO-CEBRIAN-e1790440752315.png'),
      p('Ismael Carrión', 'ISMAEL-CARRION-e1790440764330.png'),
      p('Jorge Ruiz', 'JORGE-RUIZ-e1790440777190.png'),
      p('Mario Monteagudo', 'MARIO-MONTEAGUDO-e1790440788666.png'),
      p('Raúl Castillo', 'RAUL-CASTILLO-e1790440812311.png'),
      p('Ricardo Jaramillo', 'RICARDO-JARAMILLO-e1790440824510.png'),
      p('Sergio Valenzuela', 'SERGIO-VALENZUELA-e1790440837238.png'),
    ],
  },
  {
    slug: 'senior-afade',
    nombre: 'Senior AFADE',
    corto: 'Senior AFADE',
    grupo: 'senior',
    anios: '2007 en adelante',
    competicion: 'Liga AFADE',
    foto: '2026/06/SENIOR-AFADE-1-e1780952850909.jpg',
    resumen: 'Equipo senior que compite en la liga AFADE. Fútbol sala de barrio con ambición y mucho compañerismo.',
    captacion: true,
  },

  // ---------- INCLUSIVO ----------
  {
    slug: 'genuine',
    nombre: 'Senior Genuine',
    corto: 'Genuine',
    grupo: 'inclusivo',
    competicion: 'Fútbol 7 y fútbol sala inclusivo',
    foto: '2026/06/GENUINE-1.jpg',
    resumen:
      'Equipo formado por personas con discapacidad intelectual. Desde 2026 integra a Málaga Siempre Fuerte y entrena y compite en fútbol 7 y fútbol sala.',
    captacion: true,
  },
];

export const equiposPorGrupo = (g: Grupo) => EQUIPOS.filter((e) => e.grupo === g);
