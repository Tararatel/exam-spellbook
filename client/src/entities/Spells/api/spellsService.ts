import { axiosInstance } from '@/shared/api';
import type { CreateSpell, Spell, Spells, UpdateSpell } from '../types/spellsTypes';
import { SpellSchema, SpellsSchema } from '../types/spellsTypes';

const SpellsService = {
  getAll: async (): Promise<Spells> => {
    const response = await axiosInstance.get('/spells');
    const validData = SpellsSchema.parse(response.data);
    return validData;
  },

  getById: async (id: number): Promise<Spell> => {
    const response = await axiosInstance.get(`/spells/${id.toString()}`);
    const validData = SpellSchema.parse(response.data);
    return validData;
  },

  create: async (data: CreateSpell): Promise<Spell> => {
    const response = await axiosInstance.post('/spells', data);
    const validData = SpellSchema.parse(response.data);
    return validData;
  },

  update: async (id: number, data: UpdateSpell): Promise<Spell> => {
    const response = await axiosInstance.put(`/spells/${id.toString()}`, data);
    const validData = SpellSchema.parse(response.data);
    return validData;
  },

  delete: async (id: number): Promise<void> => {
    await axiosInstance.delete(`/spells/${id.toString()}`);
  },

  generate: async (): Promise<Spell> => {
    const response = await axiosInstance.post('/spells/generate');
    const validData = SpellSchema.parse(response.data);
    return validData;
  },
};

export default SpellsService;
