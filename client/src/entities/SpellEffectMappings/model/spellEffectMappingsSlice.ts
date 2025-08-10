import { createSlice } from '@reduxjs/toolkit';
import { fetchSpellEffectMappings, createSpellEffectMapping } from './spellEffectMappingsThunks';
import type { SpellEffectMappingState } from '../types/spellEffectMappingsTypes';

const initialState: SpellEffectMappingState = {
  items: [],
  loading: false,
  error: null,
};

const spellEffectMappingsSlice = createSlice({
  name: 'spellEffectMappings',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpellEffectMappings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSpellEffectMappings.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchSpellEffectMappings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Ошибка загрузки заклинаний';
      })
      .addCase(createSpellEffectMapping.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSpellEffectMapping.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(createSpellEffectMapping.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Ошибка создания заклинания';
      });
  },
});

export const { clearError } = spellEffectMappingsSlice.actions;
export default spellEffectMappingsSlice.reducer;
