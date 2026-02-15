export const siteConfig = {
  siteUrl: 'https://ferrandis.me',
  name: 'Adrian Ferrandis Homsi',
  role: 'Software Engineer',
  location: {
    es: 'Valencia, España',
    en: 'Valencia, Spain',
  },
  email: 'adrian92539@gmail.com',
  intro: {
    es: 'Ingeniero de software orientado a producto, con conocimiento sólido de Java/Spring y TypeScript, y experiencia real como full stack trabajando tanto en frontend como en backend en entornos de I+D.',
    en: 'Product-oriented software engineer with solid knowledge of Java/Spring and TypeScript, and hands-on full-stack experience across both frontend and backend in R&D environments.',
  },
  bio: [
    {
      es: 'Actualmente trabajo en EDICOM dentro del departamento de I+D, participando en diseño e implementación de servicios escalables, integraciones y mejoras continuas de plataforma.',
      en: 'I currently work at EDICOM in the R&D department, contributing to scalable services, integrations, and continuous platform improvements.',
    },
    {
      es: 'Combino visión de negocio con ejecución técnica y me siento cómodo colaborando en equipos ágiles, liderando entregas técnicas y manteniendo foco en calidad, mantenimiento y velocidad de iteración. En mi tiempo libre desarrollo con distintos frameworks de TypeScript tanto en frontend como en backend.',
      en: 'I combine business perspective with technical execution, and I am comfortable collaborating in agile teams while keeping quality and delivery speed aligned. In my free time, I build with different TypeScript frameworks across frontend and backend.',
    },
    {
      es: 'También trabajo con Python aplicado a IA y Machine Learning, y acumulo varios años de experiencia utilizando agentes y herramientas de IA para acelerar generación de código, prototipado y tareas de desarrollo.',
      en: 'I also work with Python for AI and machine learning, and I have several years of experience using AI agents and tools to speed up code generation, prototyping, and development workflows.',
    },
  ],
  openTo: {
    es: 'Interesado en retos de ingeniería de software y proyectos donde el producto y la experiencia de usuario importan, combinando Java/Spring, TypeScript y Python aplicado a IA.',
    en: 'Interested in software engineering challenges and product teams where user experience matters, combining Java/Spring, TypeScript, and Python applied to AI.',
  },
  social: {
    github: 'https://github.com/ferrandisme',
    linkedin: 'https://www.linkedin.com/in/adrian-ferrandis/',
    blog: 'https://blog.ferrandis.me/',
  },
  seo: {
    defaultTitle: {
      es: 'Adrian Ferrandis Homsi | Software Engineer',
      en: 'Adrian Ferrandis Homsi | Software Engineer',
    },
    titleTemplate: {
      es: '%s | Adrian Ferrandis',
      en: '%s | Adrian Ferrandis',
    },
    description: {
      es: 'Portfolio de Adrian Ferrandis Homsi, Software Engineer en Valencia especializado en full stack con Java/Spring, TypeScript y Python aplicado a IA.',
      en: 'Portfolio of Adrian Ferrandis Homsi, a Software Engineer in Valencia focused on full-stack engineering with Java/Spring, TypeScript, and Python for AI.',
    },
  },
} as const;

export const languageLevels = [
  {
    language: { es: 'Español', en: 'Spanish' },
    level: { es: 'Nativo / bilingüe', en: 'Native / bilingual' },
  },
  {
    language: { es: 'Inglés', en: 'English' },
    level: { es: 'Competencia profesional completa', en: 'Full professional proficiency' },
  },
  {
    language: { es: 'Valenciano', en: 'Valencian' },
    level: { es: 'Competencia profesional', en: 'Professional proficiency' },
  },
] as const;

export const skillGroups = [
  {
    title: { es: 'Backend y arquitectura', en: 'Backend and architecture' },
    items: [
      { es: 'Java', en: 'Java' },
      { es: 'Spring Boot', en: 'Spring Boot' },
      { es: 'Spring Framework', en: 'Spring Framework' },
      { es: 'TypeScript', en: 'TypeScript' },
      { es: 'SQL', en: 'SQL' },
      { es: 'Node.js', en: 'Node.js' },
      { es: 'Diseño de APIs', en: 'API design' },
    ],
  },
  {
    title: { es: 'Frontend y producto', en: 'Frontend and product' },
    items: [
      { es: 'Angular', en: 'Angular' },
      { es: 'TypeScript', en: 'TypeScript' },
      { es: 'Next.js', en: 'Next.js' },
      { es: 'JavaScript', en: 'JavaScript' },
      { es: 'HTML', en: 'HTML' },
      { es: 'CSS', en: 'CSS' },
      { es: 'UX técnica', en: 'Technical UX' },
    ],
  },
  {
    title: { es: 'Datos e IA', en: 'Data and AI' },
    items: [
      { es: 'Python', en: 'Python' },
      { es: 'Machine Learning', en: 'Machine Learning' },
      { es: 'Inteligencia artificial', en: 'Artificial intelligence' },
      { es: 'Aprendizaje supervisado', en: 'Supervised learning' },
      { es: 'Redes neuronales', en: 'Neural networks' },
      { es: 'Agentes de IA para código', en: 'AI coding agents' },
    ],
  },
  {
    title: { es: 'DevOps y metodologías', en: 'DevOps and methodologies' },
    items: [
      { es: 'Docker', en: 'Docker' },
      { es: 'Linux', en: 'Linux' },
      { es: 'Git', en: 'Git' },
      { es: 'GitHub', en: 'GitHub' },
      { es: 'GitLab', en: 'GitLab' },
      { es: 'Metodologías ágiles', en: 'Agile methodologies' },
      { es: 'Scrum', en: 'Scrum' },
      { es: 'Kanban', en: 'Kanban' },
      { es: 'TDD', en: 'TDD' },
    ],
  },
] as const;
