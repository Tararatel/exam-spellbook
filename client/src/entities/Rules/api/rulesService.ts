import { axiosInstance } from '@/shared/api';
import type { CreateRule, Rule, Rules } from '../types/rulesTypes';
import { RuleSchema, RulesSchema } from '../types/rulesTypes';

const RulesService = {
  getAll: async (): Promise<Rules> => {
    const response = await axiosInstance.get('/rules');
    const validData = RulesSchema.parse(response.data);
    return validData;
  },

  getById: async (id: number): Promise<Rule> => {
    const response = await axiosInstance.get(`/rules/${id.toString()}`);
    const validData = RuleSchema.parse(response.data);
    return validData;
  },

  create: async (data: CreateRule): Promise<Rule> => {
    const response = await axiosInstance.post('/rules', data);
    const validData = RuleSchema.parse(response.data);
    return validData;
  },

  update: async (id: number, data: CreateRule): Promise<Rule> => {
    const response = await axiosInstance.put(`/rules/${id.toString()}`, data);
    const validData = RuleSchema.parse(response.data);
    return validData;
  },

  delete: async (id: number): Promise<void> => {
    await axiosInstance.delete(`/rules/${id.toString()}`);
  },
};

export default RulesService;
