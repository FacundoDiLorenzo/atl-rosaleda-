// Partidos de la temporada. Para actualizar resultados, completá `resultado` (p. ej. '4-2').
// `local: true` = jugamos en casa. `equipo` es el slug de src/data/equipos.ts (o null si no se conoce).

export interface Partido {
  fecha: string; // ISO con hora local
  equipo: string | null;
  rival: string;
  local: boolean;
  pabellon: string;
  competicion?: string;
  resultado?: string;
}

export const PARTIDOS: Partido[] = [
  { fecha: '2026-10-25T17:00', equipo: null, rival: 'Riogordo C.F.', local: false, pabellon: 'Pabellón de Riogordo' },
  { fecha: '2026-10-24T18:00', equipo: null, rival: 'CD Sorbas', local: false, pabellon: 'Pabellón de Sorbas' },
  { fecha: '2026-10-18T16:00', equipo: 'senior-federado', rival: 'Benamocarra FC', local: true, pabellon: 'Pabellón Forus Trinidad', competicion: '2ª Andaluza Senior · Jornada 1' },
  { fecha: '2026-10-18T13:00', equipo: 'juvenil-autonomico', rival: 'Heredia 21 FS', local: true, pabellon: 'Pabellón Forus Trinidad' },
  { fecha: '2026-10-11T13:00', equipo: 'juvenil-autonomico', rival: 'Sporting de Almería', local: false, pabellon: 'Pabellón San Indalecio (Almería)' },
];
