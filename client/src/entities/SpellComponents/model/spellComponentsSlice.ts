import { createSlice } from '@reduxjs/toolkit';
import { fetchSpellComponents, createSpellComponent } from './spellComponentsThunks';
import type { SpellComponentState } from '../types/spellComponentsTypes';

const initialState: SpellComponentState = {
  items: [],
  loading: false,
  error: null,
};

const spellComponentsSlice = createSlice({
  name: 'spellComponents',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpellComponents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSpellComponents.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchSpellComponents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Ошибка загрузки компонентов заклинаний';
      })
      .addCase(createSpellComponent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSpellComponent.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(createSpellComponent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Ошибка создания компонента заклинания';
      });
  },
});

export const { clearError } = spellComponentsSlice.actions;
export default spellComponentsSlice.reducer;
