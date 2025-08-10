import { createAsyncThunk } from '@reduxjs/toolkit';
import SpellEffectMappingsService from '../api/spellEffectMappingsService';
import type { CreateSpellEffectMapping } from '../types/spellEffectMappingsTypes';

export const fetchSpellEffectMappings = createAsyncThunk(
  'spellEffectMappings/fetchSpellEffectMappings',
  async () => await SpellEffectMappingsService.getAll(),
);

export const createSpellEffectMapping = createAsyncThunk(
  'spellEffectMappings/createSpellEffectMapping',
  async (mappingData: CreateSpellEffectMapping) =>
    await SpellEffectMappingsService.create(mappingData),
);
