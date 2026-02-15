import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '../data/site';

const staticPaths = ['/', '/en/'];

export const GET: APIRoute = async () => {
  const projects = await getCollection('projects');
  const projectPaths = projects.flatMap((project) => [
    `/proyectos/${project.slug}/`,
    `/en/projects/${project.slug}/`,
  ]);

  const urls = [...staticPaths, ...projectPaths];

  const entries = urls
    .map((path) => {
      const url = new URL(path, siteConfig.siteUrl).toString();
      return `<url><loc>${url}</loc></url>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
