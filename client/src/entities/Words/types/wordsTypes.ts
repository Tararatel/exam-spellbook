import z from 'zod';

export const WordSchema = z.object({
  id: z.number(),
  word: z.string(),
  type: z.enum(['root', 'prefix', 'suffix', 'word']),
  meaning: z.string().nullable(),
  language: z.string(),
  category: z.string().nullable(),
});

export type Word = z.infer<typeof WordSchema>;

export type CreateWord = Omit<Word, 'id'>;

export const WordsSchema = z.array(WordSchema);

export type Words = z.infer<typeof WordsSchema>;

export type WordState = {
  words: Words;
  loading: boolean;
  error: string | null;
};
