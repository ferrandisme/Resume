import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '../data/site';

export const GET: APIRoute = async () => {
  const projects = await getCollection('projects');
  const now = new Date().toISOString();

  const entries = [
    { es: '/', en: '/en/' },
    ...projects.map((project) => ({
      es: `/proyectos/${project.slug}/`,
      en: `/en/projects/${project.slug}/`,
    })),
  ]
    .flatMap((entry) => {
      const esUrl = new URL(entry.es, siteConfig.siteUrl).toString();
      const enUrl = new URL(entry.en, siteConfig.siteUrl).toString();

      return [
        `<url><loc>${esUrl}</loc><lastmod>${now}</lastmod><xhtml:link rel="alternate" hreflang="es" href="${esUrl}"/><xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/><xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/></url>`,
        `<url><loc>${enUrl}</loc><lastmod>${now}</lastmod><xhtml:link rel="alternate" hreflang="es" href="${esUrl}"/><xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/><xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/></url>`,
      ];
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries}</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
