import { createSlice } from '@reduxjs/toolkit';
import { fetchWords, createWord } from './wordsThunks';
import type { WordState } from '../types/wordsTypes';

const initialState: WordState = {
  words: [],
  loading: false,
  error: null,
};

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWords.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWords.fulfilled, (state, action) => {
        state.loading = false;
        state.words = action.payload;
      })
      .addCase(fetchWords.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Ошибка загрузки слов';
      })
      .addCase(createWord.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createWord.fulfilled, (state, action) => {
        state.loading = false;
        state.words.push(action.payload);
      })
      .addCase(createWord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Ошибка создания слова';
      });
  },
});

export const { clearError } = wordsSlice.actions;
export default wordsSlice.reducer;
