import { createAsyncThunk } from '@reduxjs/toolkit';
import WordsService from '../api/wordsService';
import type { CreateWord } from '../types/wordsTypes';

export const fetchWords = createAsyncThunk(
  'words/fetchWords',
  async () => await WordsService.getAll(),
);

export const createWord = createAsyncThunk(
  'words/createWord',
  async (wordData: CreateWord) => await WordsService.create(wordData),
);
