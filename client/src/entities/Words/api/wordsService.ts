import { axiosInstance } from '@/shared/api';
import type { CreateWord, Word, Words } from '../types/wordsTypes';
import { WordSchema, WordsSchema } from '../types/wordsTypes';

const WordsService = {
  getAll: async (): Promise<Words> => {
    const response = await axiosInstance.get('/words');
    const validData = WordsSchema.parse(response.data);
    return validData;
  },

  getById: async (id: number): Promise<Word> => {
    const response = await axiosInstance.get(`/words/${id.toString()}`);
    const validData = WordSchema.parse(response.data);
    return validData;
  },

  create: async (data: CreateWord): Promise<Word> => {
    const response = await axiosInstance.post('/words', data);
    const validData = WordSchema.parse(response.data);
    return validData;
  },

  update: async (id: number, data: CreateWord): Promise<Word> => {
    const response = await axiosInstance.put(`/words/${id.toString()}`, data);
    const validData = WordSchema.parse(response.data);
    return validData;
  },

  delete: async (id: number): Promise<void> => {
    await axiosInstance.delete(`/words/${id.toString()}`);
  },
};

export default WordsService;
