import z from 'zod';

export const SpellEffectMappingSchema = z.object({
  id: z.number(),
  spell_id: z.number(),
  effect_id: z.number(),
});

export type SpellEffectMapping = z.infer<typeof SpellEffectMappingSchema>;

export type CreateSpellEffectMapping = Omit<SpellEffectMapping, 'id'>;

export const SpellEffectMappingsSchema = z.array(SpellEffectMappingSchema);

export type SpellEffectMappings = z.infer<typeof SpellEffectMappingsSchema>;

export type SpellEffectMappingState = {
  items: SpellEffectMappings;
  loading: boolean;
  error: string | null;
};
