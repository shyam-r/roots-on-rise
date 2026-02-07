import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    category: z.enum(['deity', 'festival', 'culture', 'activity']),
    ageRange: z.string().default('2-8 years'),
    relatedBook: z.enum(['deities', 'shloka', 'both']).default('both'),
    relatedSlug: z.string().optional(),
  }),
});

export const collections = { blog };
