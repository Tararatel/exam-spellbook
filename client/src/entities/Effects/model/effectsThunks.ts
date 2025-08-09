import { createAsyncThunk } from '@reduxjs/toolkit';
import EffectsService from '../api/effectsService';
import type { CreateEffect } from '../types/effectsTypes';

export const fetchEffects = createAsyncThunk(
  'effects/fetchEffects',
  async () => await EffectsService.getAll(),
);

export const createEffect = createAsyncThunk(
  'effects/createEffect',
  async (effectData: CreateEffect) => await EffectsService.create(effectData),
);
