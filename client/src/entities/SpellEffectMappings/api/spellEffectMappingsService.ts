import { axiosInstance } from '@/shared/api';
import type {
  CreateSpellEffectMapping,
  SpellEffectMapping,
  SpellEffectMappings,
} from '../types/spellEffectMappingsTypes';
import {
  SpellEffectMappingSchema,
  SpellEffectMappingsSchema,
} from '../types/spellEffectMappingsTypes';

const SpellEffectMappingsService = {
  getAll: async (): Promise<SpellEffectMappings> => {
    const response = await axiosInstance.get('/spell-effect-mappings');
    const validData = SpellEffectMappingsSchema.parse(response.data);
    return validData;
  },

  getById: async (id: number): Promise<SpellEffectMapping> => {
    const response = await axiosInstance.get(`/spell-effect-mappings/${id.toString()}`);
    const validData = SpellEffectMappingSchema.parse(response.data);
    return validData;
  },

  create: async (data: CreateSpellEffectMapping): Promise<SpellEffectMapping> => {
    const response = await axiosInstance.post('/spell-effect-mappings', data);
    const validData = SpellEffectMappingSchema.parse(response.data);
    return validData;
  },

  update: async (id: number, data: CreateSpellEffectMapping): Promise<SpellEffectMapping> => {
    const response = await axiosInstance.put(`/spell-effect-mappings/${id.toString()}`, data);
    const validData = SpellEffectMappingSchema.parse(response.data);
    return validData;
  },

  delete: async (id: number): Promise<void> => {
    await axiosInstance.delete(`/spell-effect-mappings/${id.toString()}`);
  },
};

export default SpellEffectMappingsService;
