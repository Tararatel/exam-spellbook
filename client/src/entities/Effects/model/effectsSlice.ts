import { createSlice } from '@reduxjs/toolkit';
import { fetchEffects, createEffect } from './effectsThunks';
import type { EffectState } from '../types/effectsTypes';

const initialState: EffectState = {
  items: [],
  loading: false,
  error: null,
};

const effectsSlice = createSlice({
  name: 'effects',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch effects
      .addCase(fetchEffects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEffects.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchEffects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch effects';
      })
      // Create effect
      .addCase(createEffect.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createEffect.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(createEffect.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to create effect';
      });
  },
});

export const { clearError } = effectsSlice.actions;
export default effectsSlice.reducer;
