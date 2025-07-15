const ramos = [ // Primer Año - I Semestre { nombre: 'Electricidad Aplicada a Sistemas Móviles', id: 'electricidad', desbloquea: ['sist-elec'] }, { nombre: 'Mecánica de Servicio Técnico', id: 'mecanica', desbloquea: ['sist-motor'] }, { nombre: 'Organización del Taller Mecanico', id: 'org-taller', desbloquea: [] }, { nombre: 'Formación Ciudadana', id: 'formacion', desbloquea: [] }, { nombre: 'Resolución de Problemas en Álgebra', id: 'algebra', desbloquea: ['funciones'] },

// Primer Año - II Semestre { nombre: 'Administración', id: 'admin', desbloquea: ['finanzas'] }, { nombre: 'Protocolos de Seguridad en Electromovilidad', id: 'proto-seg', desbloquea: [] }, { nombre: 'Seguridad Activa del Automóvil', id: 'seg-activa', desbloquea: ['int-auto1'] }, { nombre: 'Sistemas Eléctricos del Automóvil', id: 'sist-elec', desbloquea: ['sist-elec2', 'sist-multiplex'] }, { nombre: 'Sistemas de Motorización', id: 'sist-motor', desbloquea: ['int-auto1'] }, { nombre: 'Funciones y Geometría', id: 'funciones', desbloquea: ['calculo'] },

// Segundo Año - III Semestre { nombre: 'Inglés I', id: 'ingles1', desbloquea: ['ingles2'] }, { nombre: 'Integración Automotriz I', id: 'int-auto1', desbloquea: [] }, { nombre: 'Conectividad y Redes del Automóvil', id: 'conectividad', desbloquea: [] }, { nombre: 'Sistemas Electrónicos del Automóvil', id: 'sist-elec2', desbloquea: ['int-auto2', 'gestion-motor'] }, { nombre: 'Electivo de Tendencias del Sector Productivo y de Servicios I', id: 'electivo1', desbloquea: [] }, { nombre: 'Sistemas de Transmisión', id: 'sist-trans', desbloquea: ['int-auto2'] },

// Segundo Año - IV Semestre { nombre: 'Innovación y Emprendimiento I', id: 'inno1', desbloquea: ['inno2'] }, { nombre: 'Integración Automotriz II', id: 'int-auto2', desbloquea: [] }, { nombre: 'Electivo de Tendencias del Sector Productivo y de Servicios II', id: 'electivo2', desbloquea: [] }, { nombre: 'Gestión Electrónica del Motor', id: 'gestion-motor', desbloquea: [] }, { nombre: 'Sistemas Multiplexados de Seguridad y Confortabilidad', id: 'sist-multiplex', desbloquea: [] }, { nombre: 'Diagnóstico de Sistemas de Propulsión Integrales', id: 'diag-prop', desbloquea: [] },

// Tercer Año - V Semestre { nombre: 'Cálculo Diferencial', id: 'calculo', desbloquea: [] }, { nombre: 'Física Mecánica', id: 'fisica', desbloquea: [] }, { nombre: 'Innovación y Emprendimiento II', id: 'inno2', desbloquea: ['inno3'] }, { nombre: 'Mantenibilidad Automotriz', id: 'mantenibilidad', desbloquea: ['int-auto3'] }, { nombre: 'Análisis de Materiales Automotrices', id: 'materiales', desbloquea: ['fallas-mecanicos'] }, { nombre: 'Sistemas deTermofluidos del Automóvil', id: 'termofluidos', desbloquea: ['int-auto3', 'fallas-termofluidos'] },

// Tercer Año - VI Semestre { nombre: 'Finanzas', id: 'finanzas', desbloquea: ['eval-proy'] }, { nombre: 'Inglés II', id: 'ingles2', desbloquea: ['ingles3'] }, { nombre: 'Confiabilidad Automotriz', id: 'confiabilidad', desbloquea: [] }, { nombre: 'Integración Automotriz III', id: 'int-auto3', desbloquea: [] }, { nombre: 'Análisis de Fallas en Sistemas Mecánicos', id: 'fallas-mecanicos', desbloquea: ['soporte-auto'] }, { nombre: 'Análisis de Fallas en Sistemas de Termofluidos', id: 'fallas-termofluidos', desbloquea: ['soporte-auto'] },

// Cuarto Año - VII Semestre { nombre: 'Evaluación de Proyectos', id: 'eval-proy', desbloquea: ['proyecto'] }, { nombre: 'Inglés III', id: 'ingles3', desbloquea: [] }, { nombre: 'Análisis de Garantía Automotriz', id: 'garantia', desbloquea: ['soporte-auto'] }, { nombre: 'Análisis Técnico Avanzado en Sistemas Automotrices', id: 'tecnico-avanzado', desbloquea: ['proyecto'] }, { nombre: 'Electivo de Tendencias del Sector Productivo y de Servicios III', id: 'electivo3', desbloquea: [] }, { nombre: 'Electivo de Tendencias del Sector Productivo y de Servicios IV', id: 'electivo4', desbloquea: [] },

// Cuarto Año - VIII Semestre { nombre: 'Innovación y Emprendimiento III', id: 'inno3', desbloquea: [] }, { nombre: 'Electromovilidad Sostenible', id: 'electromovilidad', desbloquea: [] }, { nombre: 'Proyecto Automotriz', id: 'proyecto', desbloquea: [] }, { nombre: 'Electivo de Tendencias del Sector Productivo y de Servicios V', id: 'electivo5', desbloquea: [] }, { nombre: 'Electivo de Tendencias del Sector Productivo y de Servicios VI', id: 'electivo6', desbloquea: [] }, { nombre: 'Soporte Automotriz Especializado', id: 'soporte-auto', desbloquea: [] }, ];

const malla = document.getElementById('malla');

ramos.forEach(ramo => { const div = document.getElementById(ramo.id); if (div) { div.addEventListener('click', () => aprobarRamo(ramo)); div.classList.add('bloqueado'); } });

function aprobarRamo(ramo) { const div = document.getElementById(ramo.id); if (div.classList.contains('aprobado')) return;

div.classList.remove('bloqueado'); div.classList.add('aprobado');

ramo.desbloquea.forEach(id => { const siguiente = document.getElementById(id); if (siguiente) { siguiente.classList.remove('bloqueado'); } }); }

// Desbloquear iniciales (sin requisitos) ['electricidad', 'mecanica', 'org-taller', 'formacion', 'algebra'].forEach(id => { const div = document.getElementById(id); if (div) div.classList.remove('bloqueado'); });


