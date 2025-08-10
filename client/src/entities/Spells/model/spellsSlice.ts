import { createSlice } from '@reduxjs/toolkit';
import { fetchSpells, createSpell, generateSpell, updateSpell, deleteSpell } from './spellsThunks';
import type { SpellState } from '../types/spellsTypes';

const initialState: SpellState = {
  items: [],
  loading: false,
  error: null,
};

const spellsSlice = createSlice({
  name: 'spells',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpells.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSpells.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchSpells.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Ошибка загрузки заклинаний';
      })
      .addCase(createSpell.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSpell.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(createSpell.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Ошибка создания заклинания';
      })
      .addCase(generateSpell.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateSpell.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(generateSpell.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Ошибка создания заклинания';
      })
      .addCase(updateSpell.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSpell.fulfilled, (state, action) => {
        state.loading = false;
        const updatedSpell = action.payload;
        state.items = state.items.map((spell) =>
          spell.id === updatedSpell.id ? updatedSpell : spell
        );
      })
      .addCase(updateSpell.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Ошибка обновления заклинания';
      })
      .addCase(deleteSpell.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSpell.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((spell) => spell.id !== action.payload);
      })
      .addCase(deleteSpell.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Ошибка удаления заклинания';
      });
  },
});

export const { clearError } = spellsSlice.actions;
export default spellsSlice.reducer;
