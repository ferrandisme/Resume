export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export type LocalizedString = Record<Locale, string>;

export function localizeText(value: LocalizedString, locale: Locale): string {
  return value[locale] ?? value[defaultLocale];
}

export function getHomePath(locale: Locale): string {
  return locale === 'es' ? '/' : '/en/';
}

export function getProjectsPath(locale: Locale): string {
  return locale === 'es' ? '/#projects' : '/en/#projects';
}

export function getProjectPath(locale: Locale, slug: string): string {
  return locale === 'es' ? `/proyectos/${slug}/` : `/en/projects/${slug}/`;
}

export function getLocaleSwitchPath(locale: Locale, pathname: string): string {
  if (locale === 'es') {
    if (pathname === '/') return '/en/';
    if (pathname.startsWith('/proyectos/')) return pathname.replace('/proyectos/', '/en/projects/');
    return `/en${pathname}`;
  }

  if (pathname === '/en/' || pathname === '/en') return '/';
  if (pathname.startsWith('/en/projects/')) return pathname.replace('/en/projects/', '/proyectos/');
  return pathname.replace(/^\/en/, '') || '/';
}
