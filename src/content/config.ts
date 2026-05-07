import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Sachverständigenbüro immogutachter360'),
    category: z.enum(['Bewertung', 'Recht', 'Markt', 'Sanierung', 'Energie', 'Bau']).default('Bewertung'),
    image: z.string().optional(),
    dateModified: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
