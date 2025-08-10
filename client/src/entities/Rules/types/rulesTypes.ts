import z from 'zod';

export const RuleSchema = z.object({
  id: z.number(),
  rule_type: z.enum(['combination', 'restriction']),
  description: z.string().nullable(),
  word_type: z.enum(['prefix', 'root', 'suffix', 'word']),
  allowed_combinations: z.unknown().nullable(), // JSON, так что z.unknown() или z.record(z.any())
});

export type Rule = z.infer<typeof RuleSchema>;

export type CreateRule = Omit<Rule, 'id'>;

export const RulesSchema = z.array(RuleSchema);

export type Rules = z.infer<typeof RulesSchema>;

export type RuleState = {
  items: Rules;
  loading: boolean;
  error: string | null;
};
