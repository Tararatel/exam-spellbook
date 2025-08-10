import { createSlice } from '@reduxjs/toolkit';
import { fetchRules, createRule } from './rulesThunks';
import type { RuleState } from '../types/rulesTypes';

const initialState: RuleState = {
  items: [],
  loading: false,
  error: null,
};

const rulesSlice = createSlice({
  name: 'rules',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRules.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRules.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchRules.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Ошибка загрузки правил';
      })
      .addCase(createRule.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createRule.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(createRule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Ошибка создания правила';
      });
  },
});

export const { clearError } = rulesSlice.actions;
export default rulesSlice.reducer;
