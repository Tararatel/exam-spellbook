import { createAsyncThunk } from '@reduxjs/toolkit';
import RulesService from '../api/rulesService';
import type { CreateRule } from '../types/rulesTypes';

export const fetchRules = createAsyncThunk(
  'rules/fetchRules',
  async () => await RulesService.getAll(),
);

export const createRule = createAsyncThunk(
  'rules/createRule',
  async (ruleData: CreateRule) => await RulesService.create(ruleData),
);
