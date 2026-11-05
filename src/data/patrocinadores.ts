export interface Patrocinador {
  nombre: string;
  logo: string;
  descripcion: string;
  web?: string;
  email?: string;
  telefono?: string;
  direccion?: string;
}

export const PATROCINADORES: Patrocinador[] = [
  {
    nombre: 'Clínicas Rincón Dental',
    logo: '2026/06/10-3-1024x1024.png',
    descripcion: 'Red de clínicas odontológicas de Málaga: implantología, ortodoncia, estética dental, endodoncia y odontopediatría con tecnología avanzada.',
    web: 'https://clinicasrincondental.com',
    email: 'hola@rincon.dental.com',
    telefono: '900 52 52 84 · 951 20 46 74',
    direccion: 'Pasaje Manuel Rincón, 14, 29740',
  },
  {
    nombre: 'Desatoros La Estrella',
    logo: '2026/06/8-3-1024x1024.png',
    descripcion: 'Desatascos, limpieza de tuberías, inspección con cámara y mantenimiento de redes de saneamiento para particulares y empresas.',
    web: 'https://desatorosysaneamientosenmalaga.com',
    email: 'info@desatorosysaneamientosenmalaga.com',
    telefono: '625 656 111 · 669 036 154',
    direccion: 'Málaga y provincia',
  },
  {
    nombre: 'Intermark Correduría de Seguros',
    logo: '2026/06/12-3-1024x1024.png',
    descripcion: 'Correduría de seguros con sede en Málaga. Asesora y gestiona seguros para particulares y empresas de forma independiente.',
    web: 'https://intermarkcorreduria.es',
    email: 'intermark@intermarkcorreduria.es',
    telefono: '952 22 04 89',
    direccion: 'Málaga',
  },
  {
    nombre: 'Fresh Barber',
    logo: '2026/06/6-3-1024x1024.png',
    descripcion: 'Barbería en Málaga especializada en cortes masculinos, degradados y arreglo de barba, con atención personalizada.',
    telefono: '695 046 766',
    direccion: 'Plaza de Capuchinos 13, Málaga',
  },
  {
    nombre: 'Bar Bodega Hermanos Madrid',
    logo: '2026/06/13-1024x1024.png',
    descripcion: 'Bar tradicional malagueño de tapas, raciones y cocina casera, con ambiente familiar y trato cercano.',
    telefono: '600 83 99 70',
    direccion: 'C. Poeta Narciso Franquelo Martínez, 5',
  },
  {
    nombre: 'Cerco Seguridad',
    logo: '2026/06/9-3-1024x1024.png',
    descripcion: 'Seguridad privada en Málaga: vigilancia, control de accesos, videovigilancia y planes de seguridad. Más de 10 años de experiencia.',
    web: 'https://cercoseguridad.com',
    email: 'info@cercoseguridad.com',
    telefono: '952 33 17 87',
    direccion: 'C/ Cristo de la Epidemia 71, Málaga',
  },
  {
    nombre: 'Fundación Fomento Deporte',
    logo: '2026/06/5-3-1024x1024.png',
    descripcion: 'Fundación malagueña que impulsa el deporte base, el deporte femenino y el deporte adaptado, promoviendo igualdad, esfuerzo e inclusión.',
    web: 'https://fundacionfomentodeporte.com',
    email: 'info@fundacionfomentodeporte.com',
    telefono: '616 35 32 41',
    direccion: 'C. Atarazanas, 2',
  },
  {
    nombre: 'Pinturas Sixto',
    logo: '2026/06/Diseno-sin-titulo-2026-06-16T191220.230-1024x1024.png',
    descripcion: 'Pintura industrial, residencial y comercial, rehabilitación y acabado de edificios para particulares y empresas.',
    email: 'info@pinturassixto.es',
    telefono: '952 04 05 56',
    direccion: 'C. Fernández Fermina, 8',
  },
  {
    nombre: 'Extinma',
    logo: '2026/06/3-3-1024x1024.png',
    descripcion: 'Protección contra incendios: instalación, mantenimiento y revisión de extintores, alarmas, BIEs y sistemas de detección.',
    web: 'https://extinma.es',
    email: 'extinma@extinma.es',
    telefono: '952 24 23 95',
    direccion: 'Calle Casabermeja, 10',
  },
  {
    nombre: 'Fontia Damaplast',
    logo: '2026/10/Diseno-sin-titulo-2026-10-05T141815.030-scaled-e1791203104396-1024x1024.png',
    descripcion: 'Suministro profesional de fontanería, calefacción, climatización, electricidad, energías renovables, sanitarios y obra civil.',
    web: 'https://fontia.es',
    email: 'info@fontia.es',
    telefono: '952 03 80 80',
    direccion: 'C/ Leda, 22 – Polígono Industrial Pérez Texeira, 29006 Málaga',
  },
];
