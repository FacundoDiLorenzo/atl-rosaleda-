// Cuerpo técnico del club (temporada 2026/27).
// Nota: "Sergio Gallego" aparecía así en la web anterior pero como "Sergio Gallegos" en la plantilla
// del Senior Federado. Unificamos a "Sergio Gallegos".
const f = (archivo: string) => `2026/10/${archivo}`;

export const ENTRENADORES = [
  { nombre: 'José Castillo', foto: f('JOSE-CASTILLO-1-e1791229905872.png') },
  { nombre: 'José Morente', foto: f('JOSE-MORENTE-e1791229880772.png') },
  { nombre: 'Cristi Fernández', foto: f('CRISTI-FERNANDEZ-e1791230132704.png') },
  { nombre: 'Álvaro Mañas', foto: f('ALVARO-MANAS--e1791230297895.png') },
  { nombre: 'Diego Quintanilla', foto: f('DIEGO-QUINTANILLA-1-e1791230001833.png') },
  { nombre: 'Víctor Villar', foto: f('VICTOR-VILLAR-e1791229618589.png') },
  { nombre: 'Sergio Gallegos', foto: f('SERGIO-GALLEGO-e1791229653765.png') },
  { nombre: 'Rubén Redondo', foto: f('RUBEN-REDONDO--e1791229713804.png') },
  { nombre: 'Nacho Palma', foto: f('NACHO-PALMA-1-e1791229729741.png') },
  { nombre: 'María Cobos', foto: f('MARIA-COBOS-e1791229780767.png') },
  { nombre: 'Juanma Heredia', foto: f('JUANMA-HEREDIA-e1791229808833.png') },
  { nombre: 'Juan Ortega', foto: f('JUAN-ORTEGA-e1791229851737.png') },
  { nombre: 'José Baena', foto: f('Jose-Baena-e1791229940123.png') },
  { nombre: 'Francis Moreno', foto: f('FRANCIS-MORENO-e1791229971133.png') },
  { nombre: 'David Sánchez', foto: f('DAVID-SANCHEZ-e1791230052578.png') },
  { nombre: 'Damián Cortés', foto: f('DAMIAN-CORTES-e1791230101872.png') },
  { nombre: 'Carlos Fernández', foto: f('CARLOS-FERNANDEZ--e1791230172366.png') },
  { nombre: 'Antonio Corpas', foto: f('ANTONIO-CORPAS-e1791230200417.png') },
  { nombre: 'Andrea Mancera', foto: f('ANDREA-MANCERA--e1791230227937.png') },
  { nombre: 'Andrea Cobos', foto: f('ANDREA-COBOS-e1791230254782.png') },
  { nombre: 'Álvaro Ortega', foto: f('ALVARO-ORTEGA-e1791230277687.png') },
  { nombre: 'Ale Moreno', foto: f('ALE-MORENO-e1791230342282.png') },
  { nombre: 'Ale Heredia', foto: f('ALE-HEREDIA-e1791230370443.png') },
  { nombre: 'Adebajo Bakare', foto: f('ADEBAJO-BAKARE-e1791230397697.png') },
  { nombre: 'Ale Barrio', foto: f('ALE-BARRIO-e1791230438298.png') },
];

export const DIRECTIVA = [
  { nombre: 'José Castillo', cargo: 'Presidente', area: 'Dirección y gestión', funciones: ['Dirección deportiva', 'Coordinador de la base', 'Entrenador'] },
  { nombre: 'José Morente', cargo: 'Vicepresidente', area: 'Dirección y gestión', funciones: ['Tesorero', 'Gestión administrativa'] },
  { nombre: 'Cristina Fernández', cargo: 'Secretaria', area: 'Organización y comunicación', funciones: ['Marketing y redes sociales', 'Coordinadora de escuela', 'Entrenadora'] },
  { nombre: 'Álvaro Mañas', cargo: 'Entrenador de porteros', area: 'Área deportiva', funciones: ['Entrenador', 'Apoyo organizativo y coordinación'] },
];
