import z from 'zod';

export const RootSchema = z.object({
  id: z.number(),
  root_name: z.string(),
  description: z.string(),
  category: z.string(),
})