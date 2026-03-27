const blogLocales = ["es", "en"] as const;

export type BlogLocale = (typeof blogLocales)[number];

export interface BlogEntryLike {
  slug: string;
  data: {
    draft: boolean;
  };
}

export interface BlogCounterpartInfo<TEntry extends BlogEntryLike> {
  entry: TEntry;
  locale: BlogLocale;
  relativePath: string;
  counterpartLocale: BlogLocale;
  counterpartSlug: string;
  counterpart?: TEntry;
  hasCounterpart: boolean;
  hasPublishableCounterpart: boolean;
}

function isBlogLocale(value: string): value is BlogLocale {
  return blogLocales.includes(value as BlogLocale);
}

function getBlogLocale(slug: string): BlogLocale {
  const [locale] = slug.split("/");
  if (!locale || !isBlogLocale(locale)) {
    throw new Error(`Unsupported blog locale slug: ${slug}`);
  }

  return locale;
}

function getRelativePath(slug: string, locale: BlogLocale): string {
  const prefix = `${locale}/`;
  if (!slug.startsWith(prefix)) {
    throw new Error(`Blog slug does not match locale prefix: ${slug}`);
  }

  return slug.slice(prefix.length);
}

function getCounterpartLocale(locale: BlogLocale): BlogLocale {
  return locale === "es" ? "en" : "es";
}

function isPublishable(entry: BlogEntryLike | undefined): boolean {
  return entry !== undefined && !entry.data.draft;
}

export function createBlogCounterpartLookup<TEntry extends BlogEntryLike>(
  entries: readonly TEntry[],
) {
  const entriesBySlug = new Map(entries.map((entry) => [entry.slug, entry]));

  function getCounterpartInfo(entry: TEntry): BlogCounterpartInfo<TEntry> {
    const locale = getBlogLocale(entry.slug);
    const relativePath = getRelativePath(entry.slug, locale);
    const counterpartLocale = getCounterpartLocale(locale);
    const counterpartSlug = `${counterpartLocale}/${relativePath}`;
    const counterpart = entriesBySlug.get(counterpartSlug);

    return {
      entry,
      locale,
      relativePath,
      counterpartLocale,
      counterpartSlug,
      counterpart,
      hasCounterpart: counterpart !== undefined,
      hasPublishableCounterpart: isPublishable(counterpart),
    };
  }

  function isDiscoveryVisible(entry: TEntry): boolean {
    return (
      !entry.data.draft && getCounterpartInfo(entry).hasPublishableCounterpart
    );
  }

  return {
    getCounterpartInfo,
    isDiscoveryVisible,
  };
}

export function filterDiscoveryVisibleEntries<TEntry extends BlogEntryLike>(
  entries: readonly TEntry[],
  locale: BlogLocale,
): TEntry[] {
  const lookup = createBlogCounterpartLookup(entries);

  return entries.filter(
    (entry) =>
      getBlogLocale(entry.slug) === locale && lookup.isDiscoveryVisible(entry),
  );
}
