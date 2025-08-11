import z from 'zod';

export const SpellSchema = z.object({
  Words: z.array(z.any()),
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  // type: z.enum(['attack', 'defense', 'utility', 'healing', 'charm']),
  // difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  // wand_movement: z.string().nullable(),
  pronunciation: z.string().nullable(),
  // is_canon: z.boolean(),
});

export type Spell = z.infer<typeof SpellSchema>;

export type CreateSpell = Omit<Spell, 'id'>;

export const SpellsSchema = z.array(SpellSchema);

export type Spells = z.infer<typeof SpellsSchema>;

export const UpdateSpellSchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
})

export type UpdateSpell = z.infer<typeof UpdateSpellSchema>;

export type SpellState = {
  items: Spells;
  loading: boolean;
  error: string | null;
};
