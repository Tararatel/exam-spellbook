import z from 'zod'

export const EffectSchema = z.object({
  id: z.number(),
  effect_name: z.string(),
  description: z.string(),
  category: z.string(),
})


export type Effect = z.infer<typeof EffectSchema>

export type CreateEffect = Omit<Effect, 'id'>

export const EffectsSchema = z.array(EffectSchema)

export type Effects = z.infer<typeof EffectsSchema>

export type EffectState = {
  items: Effects;
  loading: boolean;
  error: string | null;
};