import z from 'zod';

export const SpellComponentSchema = z.object({
  id: z.number(),
  spell_id: z.number(),
  word_id: z.number(),
  position: z.enum(['prefix', 'root', 'suffix']),
});

export type SpellComponent = z.infer<typeof SpellComponentSchema>;

export type CreateSpellComponent = Omit<SpellComponent, 'id'>;

export const SpellComponentsSchema = z.array(SpellComponentSchema);

export type SpellComponents = z.infer<typeof SpellComponentsSchema>;

export type SpellComponentState = {
  items: SpellComponents;
  loading: boolean;
  error: string | null;
};
