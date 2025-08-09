import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { spellsApi } from '../../../shared/api';

// Async thunks
export const fetchSpells = createAsyncThunk(
  'spells/fetchSpells',
  async (_, { rejectWithValue }) => {
    try {
      const response = await spellsApi.getAll();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch spells');
    }
  }
);

export const createSpell = createAsyncThunk(
  'spells/createSpell',
  async (spellData, { rejectWithValue }) => {
    try {
      const response = await spellsApi.create(spellData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to create spell');
    }
  }
);

export const updateSpell = createAsyncThunk(
  'spells/updateSpell',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await spellsApi.update(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to update spell');
    }
  }
);

export const deleteSpell = createAsyncThunk(
  'spells/deleteSpell',
  async (id, { rejectWithValue }) => {
    try {
      await spellsApi.delete(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to delete spell');
    }
  }
);

const spellsSlice = createSlice({
  name: 'spells',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch spells
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
        state.error = action.payload;
      })
      // Create spell
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
        state.error = action.payload;
      })
      // Update spell
      .addCase(updateSpell.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      // Delete spell
      .addCase(deleteSpell.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

export const { clearError } = spellsSlice.actions;
export default spellsSlice.reducer;

