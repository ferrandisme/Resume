import type { Locale } from './config';

export type TranslationKey = {
  htmlLang: string;
  nav: {
    home: string;
    projects: string;
    experience: string;
    education: string;
    skills: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    roleLine: string;
    ctaProjects: string;
    ctaContact: string;
    panelTitle: string;
    panelItems: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    highlightsTitle: string;
    highlights: string[];
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    detail: string;
    code: string;
    article: string;
    demo: string;
    status: {
      completed: string;
      inProgress: string;
      hackathon: string;
    };
  };
  experience: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  education: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    intro: string;
    languages: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    email: string;
    linkedin: string;
    github: string;
  };
  footer: {
    rights: string;
  };
  localeSwitch: string;
  theme: {
    toggle: string;
    light: string;
    dark: string;
  };
  projectDetail: {
    back: string;
    summary: string;
    stack: string;
    team: string;
    duration: string;
    links: string;
    repository: string;
    article: string;
    demo: string;
  };
};

const translations: Record<Locale, TranslationKey> = {
  es: {
    htmlLang: 'es',
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      experience: 'Experiencia',
      education: 'Educación',
      skills: 'Skills',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: 'Software Engineering · Full Stack · Product mindset',
      roleLine: 'Software Engineer en',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Contactar',
      panelTitle: 'Resumen rápido',
      panelItems: [
        'Conocimiento sólido de Java/Spring y TypeScript, con experiencia full stack en frontend y backend.',
        'Trabajo habitual con SQL y NoSQL en producto real.',
        'Python aplicado a IA/Machine Learning y varios años usando agentes de IA para generación de código.',
      ],
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Construyo software útil, mantenible y orientado a negocio',
      intro: 'Trabajo con una mentalidad pragmática: decisiones técnicas claras, foco en impacto y arquitectura preparada para evolucionar.',
      highlightsTitle: 'Qué aporto al equipo',
      highlights: [
        'Diseño técnico robusto y sostenible a largo plazo.',
        'Capacidad de ejecución de extremo a extremo en producto.',
        'Uso continuo de frameworks TypeScript en frontend y backend.',
        'Experiencia práctica con Python, IA y agentes de código.',
        'Comunicación clara entre negocio y tecnología.',
      ],
    },
    projects: {
      eyebrow: 'Portfolio',
      title: 'Proyectos seleccionados',
      intro: 'Casos donde combino ingeniería, producto y entrega real. Cada proyecto está desacoplado para facilitar cambios futuros.',
      detail: 'Detalle',
      code: 'Código',
      article: 'Artículo',
      demo: 'Demo',
      status: {
        completed: 'Completado',
        inProgress: 'En desarrollo',
        hackathon: 'Hackathon',
      },
    },
    experience: {
      eyebrow: 'Trayectoria',
      title: 'Experiencia profesional',
      intro: 'Experiencia en entornos reales de producto con foco en calidad de entrega y evolución técnica.',
    },
    education: {
      eyebrow: 'Formación',
      title: 'Educación',
      intro: 'Base técnica en ingeniería informática reforzada con especialización en inteligencia artificial.',
    },
    skills: {
      eyebrow: 'Tecnologías',
      title: 'Stack, TypeScript y aptitudes',
      intro: 'Conjunto de competencias técnicas y metodológicas para construir producto fiable, incluyendo ecosistema TypeScript en frontend y backend.',
      languages: 'Idiomas',
    },
    contact: {
      eyebrow: 'Contacto',
      title: '¿Hablamos?',
      intro: 'Si tienes un reto de ingeniería o producto, puedo aportar desde arquitectura y delivery hasta ejecución full stack.',
      email: 'Enviar email',
      linkedin: 'Ver LinkedIn',
      github: 'Ver GitHub',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
    localeSwitch: 'EN',
    theme: {
      toggle: 'Cambiar tema',
      light: 'Claro',
      dark: 'Oscuro',
    },
    projectDetail: {
      back: 'Volver al portfolio',
      summary: 'Resumen',
      stack: 'Tecnologías',
      team: 'Equipo',
      duration: 'Duración',
      links: 'Enlaces',
      repository: 'Repositorio',
      article: 'Artículo',
      demo: 'Demo',
    },
  },
  en: {
    htmlLang: 'en',
    nav: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Software Engineering · Full Stack · Product mindset',
      roleLine: 'Software Engineer in',
      ctaProjects: 'See projects',
      ctaContact: 'Get in touch',
      panelTitle: 'Quick snapshot',
      panelItems: [
        'Solid knowledge of Java/Spring and TypeScript, with hands-on full-stack experience across frontend and backend.',
        'Daily work with SQL and NoSQL in real product environments.',
        'Python for AI/Machine Learning and several years using AI agents for code generation.',
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'I build useful, maintainable software with business impact',
      intro: 'I work with a pragmatic mindset: clear technical decisions, focus on measurable impact, and architecture ready to evolve.',
      highlightsTitle: 'What I bring to a team',
      highlights: [
        'Robust technical design with long-term maintainability.',
        'End-to-end product delivery capabilities.',
        'Continuous usage of TypeScript frameworks for frontend and backend.',
        'Practical experience with Python, AI, and coding agents.',
        'Clear communication between business and engineering.',
      ],
    },
    projects: {
      eyebrow: 'Portfolio',
      title: 'Selected projects',
      intro: 'Examples where I combine engineering, product thinking, and delivery. Each project is structured for future changes.',
      detail: 'Details',
      code: 'Code',
      article: 'Article',
      demo: 'Demo',
      status: {
        completed: 'Completed',
        inProgress: 'In progress',
        hackathon: 'Hackathon',
      },
    },
    experience: {
      eyebrow: 'Journey',
      title: 'Professional experience',
      intro: 'Experience in real product environments with a strong focus on delivery quality and technical evolution.',
    },
    education: {
      eyebrow: 'Education',
      title: 'Education',
      intro: 'Computer engineering foundation reinforced with postgraduate studies in artificial intelligence.',
    },
    skills: {
      eyebrow: 'Technologies',
      title: 'Stack, TypeScript and capabilities',
      intro: 'Technical and delivery skills to build reliable software products, including TypeScript ecosystems for frontend and backend.',
      languages: 'Languages',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk',
      intro: 'If you are building an engineering-driven product, I can contribute from architecture and delivery to full-stack execution.',
      email: 'Send email',
      linkedin: 'Open LinkedIn',
      github: 'Open GitHub',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    localeSwitch: 'ES',
    theme: {
      toggle: 'Switch theme',
      light: 'Light',
      dark: 'Dark',
    },
    projectDetail: {
      back: 'Back to portfolio',
      summary: 'Summary',
      stack: 'Tech stack',
      team: 'Team',
      duration: 'Duration',
      links: 'Links',
      repository: 'Repository',
      article: 'Article',
      demo: 'Demo',
    },
  },
};

export function getTranslations(locale: Locale): TranslationKey {
  return translations[locale];
}
