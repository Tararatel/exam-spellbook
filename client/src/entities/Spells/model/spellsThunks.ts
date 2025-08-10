import { createAsyncThunk } from '@reduxjs/toolkit';
import SpellsService from '../api/spellsService';
import type { CreateSpell, UpdateSpell } from '../types/spellsTypes';

export const fetchSpells = createAsyncThunk(
  'spells/fetchSpells',
  async () => await SpellsService.getAll(),
);

export const createSpell = createAsyncThunk(
  'spells/createSpell',
  async (spellData: CreateSpell) => await SpellsService.create(spellData),
);

export const generateSpell = createAsyncThunk(
  'spells/generateSpell',
  async () => await SpellsService.generate(),
);

export const updateSpell = createAsyncThunk(
  'spells/updateSpell',
  async ({ id, spellData }: { id: number; spellData: UpdateSpell }) => {
    const response = await SpellsService.update(id, spellData);
    return response;
  },
);

export const deleteSpell = createAsyncThunk('spells/deleteSpell', async (id: number) => {
  await SpellsService.delete(id);
  return id;
});
