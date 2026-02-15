import type { Locale } from '../i18n/config';

const localeMap: Record<Locale, string> = {
  es: 'es-ES',
  en: 'en-US',
};

const currentLabel: Record<Locale, string> = {
  es: 'Actualidad',
  en: 'Present',
};

export function formatDateRange(startDate: string, endDate: string, locale: Locale): string {
  const format = new Intl.DateTimeFormat(localeMap[locale], {
    month: 'short',
    year: 'numeric',
  });

  const start = format.format(new Date(startDate));
  const end =
    endDate.toLowerCase() === 'actualidad' ? currentLabel[locale] : format.format(new Date(endDate));

  return `${start} - ${end}`;
}

export function sortByOrderDesc<T extends { data: { order: number } }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.data.order - a.data.order);
}

export function sortByYearDesc<T extends { data: { year: number } }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.data.year - a.data.year);
}
