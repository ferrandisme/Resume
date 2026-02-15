import { defineCollection, z } from 'astro:content';

const localizedString = z.object({
  es: z.string(),
  en: z.string(),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: localizedString,
    summary: localizedString,
    year: z.number(),
    status: z.enum(['completed', 'in-progress', 'hackathon']),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().optional(),
    articleUrl: z.string().url().optional(),
    team: localizedString.optional(),
    duration: localizedString.optional(),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: localizedString,
    startDate: z.string(),
    endDate: z.string(),
    location: localizedString,
    modality: localizedString,
    order: z.number().default(0),
    highlights: z.array(localizedString),
    stack: z.array(z.string()),
  }),
});

const education = defineCollection({
  type: 'content',
  schema: z.object({
    institution: z.string(),
    degree: localizedString,
    field: localizedString,
    startDate: z.string(),
    endDate: z.string(),
    grade: localizedString.optional(),
    order: z.number().default(0),
    highlights: z.array(localizedString).default([]),
  }),
});

export const collections = {
  projects,
  experience,
  education,
};
