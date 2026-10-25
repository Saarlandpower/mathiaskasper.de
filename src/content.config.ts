import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projekte = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projekte' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(['meshcore', 'homeassistant', 'adsb', 'tools']),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    tech: z.array(z.string()).default([]),
    role: z.enum(['eigenes', 'fork', 'mitarbeit']).default('eigenes'),
    featured: z.boolean().default(false),
    order: z.number().default(50),
  }),
});

const snippets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/snippets' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    lang: z.string(),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date(),
  }),
});

export const collections = { projekte, snippets };
