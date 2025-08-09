import { axiosInstance } from '@/shared/api';
import type { CreateEffect, Effect, Effects } from '../types/effectsTypes';
import { EffectSchema, EffectsSchema } from '../types/effectsTypes';

const EffectsService = {
  getAll: async (): Promise<Effects> => {
    const response = await axiosInstance.get('/effects');
    const validData = EffectsSchema.parse(response.data);
    return validData;
  },

  getById: async (id: number): Promise<Effect> => {
    const response = await axiosInstance.get(`/effects/${id.toString()}`);
    const validData = EffectSchema.parse(response.data);
    return validData;
  },

  create: async (data: CreateEffect): Promise<Effect> => {
    const response = await axiosInstance.post('/effects', data);
    const validData = EffectSchema.parse(response.data);
    return validData;
  },

  update: async (id: number, data: CreateEffect): Promise<Effect> => {
    const response = await axiosInstance.put(`/effects/${id.toString()}`, data);
    const validData = EffectSchema.parse(response.data);
    return validData;
  },

  delete: async (id: number): Promise<void> => {
    await axiosInstance.delete(`/effects/${id.toString()}`);
  },
};

export default EffectsService;
