import { axiosInstance } from '@/shared/api';
import type {
  CreateSpellComponent,
  SpellComponent,
  SpellComponents,
} from '../types/spellComponentsTypes';
import { SpellComponentSchema, SpellComponentsSchema } from '../types/spellComponentsTypes';

const SpellComponentsService = {
  getAll: async (): Promise<SpellComponents> => {
    const response = await axiosInstance.get('/spell-components');
    const validData = SpellComponentsSchema.parse(response.data);
    return validData;
  },

  getById: async (id: number): Promise<SpellComponent> => {
    const response = await axiosInstance.get(`/spell-components/${id.toString()}`);
    const validData = SpellComponentSchema.parse(response.data);
    return validData;
  },

  create: async (data: CreateSpellComponent): Promise<SpellComponent> => {
    const response = await axiosInstance.post('/spell-components', data);
    const validData = SpellComponentSchema.parse(response.data);
    return validData;
  },

  update: async (id: number, data: CreateSpellComponent): Promise<SpellComponent> => {
    const response = await axiosInstance.put(`/spell-components/${id.toString()}`, data);
    const validData = SpellComponentSchema.parse(response.data);
    return validData;
  },

  delete: async (id: number): Promise<void> => {
    await axiosInstance.delete(`/spell-components/${id.toString()}`);
  },
};

export default SpellComponentsService;
