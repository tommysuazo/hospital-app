import photo01 from '../assets/images/doctors/doctor-01.jpg'
import photo02 from '../assets/images/doctors/doctor-02.jpg'
import photo03 from '../assets/images/doctors/doctor-03.jpg'
import photo04 from '../assets/images/doctors/doctor-04.jpg'
import photo05 from '../assets/images/doctors/doctor-05.jpg'
import photo06 from '../assets/images/doctors/doctor-06.jpg'
import photo07 from '../assets/images/doctors/doctor-07.jpg'
import photo08 from '../assets/images/doctors/doctor-08.jpg'

export const specialtiesList = [
  'Medicina General',
  'Pediatría',
  'Ginecología',
  'Obstetricia',
  'Cardiología',
  'Endocrinología',
  'Gastroenterología',
  'Dermatología',
  'Psicología',
]

const photos = [photo01, photo02, photo03, photo04, photo05, photo06, photo07, photo08]

const specialtyDescriptions = {
  'Medicina General': {
    es: 'Ofrece atención médica integral, prevención y seguimiento personalizado para pacientes adultos y sus familias.',
    en: 'Provides comprehensive medical care, prevention and personalized follow-up for adult patients and their families.',
  },
  Pediatría: {
    es: 'Acompaña el crecimiento y desarrollo de niños y adolescentes con una atención cercana, preventiva y familiar.',
    en: 'Supports the growth and development of children and adolescents through warm, preventive, family-centered care.',
  },
  Ginecología: {
    es: 'Brinda atención integral para la salud de la mujer, con énfasis en prevención, diagnóstico y seguimiento continuo.',
    en: "Provides comprehensive women's healthcare with an emphasis on prevention, diagnosis and continuous follow-up.",
  },
  Obstetricia: {
    es: 'Acompaña cada etapa del embarazo con orientación especializada, seguimiento prenatal y atención humana.',
    en: 'Supports every stage of pregnancy with specialized guidance, prenatal follow-up and compassionate care.',
  },
  Cardiología: {
    es: 'Especialista en prevención, diagnóstico y seguimiento de enfermedades cardiovasculares con un enfoque integral.',
    en: 'Specializes in the prevention, diagnosis and follow-up of cardiovascular conditions through comprehensive care.',
  },
  Endocrinología: {
    es: 'Atiende trastornos hormonales y metabólicos mediante evaluación clínica y planes de tratamiento personalizados.',
    en: 'Treats hormonal and metabolic conditions through clinical evaluation and personalized treatment plans.',
  },
  Gastroenterología: {
    es: 'Se dedica al diagnóstico y cuidado de la salud digestiva, ofreciendo seguimiento cercano y orientación preventiva.',
    en: 'Focuses on digestive health diagnosis and care, providing close follow-up and preventive guidance.',
  },
  Dermatología: {
    es: 'Ofrece diagnóstico y tratamiento para el cuidado de la piel, el cabello y las uñas en todas las etapas de la vida.',
    en: 'Provides diagnosis and treatment for skin, hair and nail care throughout every stage of life.',
  },
  Psicología: {
    es: 'Brinda acompañamiento profesional en salud emocional mediante un espacio de escucha, orientación y confianza.',
    en: 'Provides professional emotional-health support through a space built on listening, guidance and trust.',
  },
}

const rawDoctors = [
  { name: 'Dra. María Rodríguez', specialties: ['Cardiología'], room: '204', ext: '1204', workDays: [1, 2, 3, 4, 5] },
  { name: 'Dr. Carlos Méndez', specialties: ['Medicina General'], room: '101', ext: '1101', workDays: [1, 3, 5] },
  { name: 'Dra. Ana Fernández', specialties: ['Pediatría'], room: '105', ext: '1105', workDays: [2, 4] },
  { name: 'Dr. Luis Gómez', specialties: ['Ginecología'], room: '210', ext: '1210', workDays: [1, 2, 3, 4, 5] },
  { name: 'Dra. Carmen Díaz', specialties: ['Obstetricia'], room: '211', ext: '1211', workDays: [6] },
  { name: 'Dr. Roberto Santos', specialties: ['Endocrinología'], room: '302', ext: '1302', workDays: [2, 4, 6] },
  { name: 'Dra. Patricia Vargas', specialties: ['Gastroenterología'], room: '303', ext: '1303', workDays: [1, 3] },
  { name: 'Dr. Fernando Cruz', specialties: ['Dermatología'], room: '108', ext: '1108', workDays: [1, 2, 3, 4, 5] },
  { name: 'Dra. Isabel Morales', specialties: ['Psicología'], room: '401', ext: '1401', workDays: [3, 5] },
  { name: 'Dr. Miguel Torres', specialties: ['Medicina General'], room: '102', ext: '1102', workDays: [0, 2, 4] },
  { name: 'Dra. Sofía Ramírez', specialties: ['Pediatría'], room: '106', ext: '1106', workDays: [1, 4] },
  { name: 'Dr. Eduardo Castillo', specialties: ['Cardiología', 'Medicina General'], room: '205', ext: '1205', workDays: [1, 2, 3, 4, 5] },
  { name: 'Dra. Laura Jiménez', specialties: ['Ginecología', 'Obstetricia'], room: '212', ext: '1212', workDays: [2, 3] },
  { name: 'Dr. Ricardo Peña', specialties: ['Gastroenterología'], room: '304', ext: '1304', workDays: [5, 6] },
  { name: 'Dra. Gabriela Ortiz', specialties: ['Dermatología'], room: '109', ext: '1109', workDays: [1, 4, 5] },
  { name: 'Dr. Javier Reyes', specialties: ['Psicología'], room: '402', ext: '1402', workDays: [2, 4] },
]

function slugify(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export const doctors = rawDoctors.map((doctor, index) => ({
  id: index + 1,
  slug: slugify(doctor.name),
  photo: photos[index % photos.length],
  description: specialtyDescriptions[doctor.specialties[0]],
  ...doctor,
}))

export function isAvailableOnDate(doctor, date) {
  return doctor.workDays.includes(date.getDay())
}
