import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Erdem Tanrikulu'),
    category: z.enum(['Bewertung', 'Recht', 'Markt', 'Sanierung', 'Energie', 'Bau']).default('Bewertung'),
    image: z.string().optional(),
    dateModified: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
