import { createAsyncThunk } from '@reduxjs/toolkit';
import SpellComponentsService from '../api/spellComponentsService';
import type { CreateSpellComponent } from '../types/spellComponentsTypes';

export const fetchSpellComponents = createAsyncThunk(
  'spellComponents/fetchSpellComponents',
  async () => await SpellComponentsService.getAll(),
);

export const createSpellComponent = createAsyncThunk(
  'spellComponents/createSpellComponent',
  async (componentData: CreateSpellComponent) => await SpellComponentsService.create(componentData),
);
