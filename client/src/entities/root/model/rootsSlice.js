import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { rootsApi } from '../../../shared/api';

// Async thunks
export const fetchRoots = createAsyncThunk(
  'roots/fetchRoots',
  async (_, { rejectWithValue }) => {
    try {
      const response = await rootsApi.getAll();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch roots');
    }
  }
);

export const createRoot = createAsyncThunk(
  'roots/createRoot',
  async (rootData, { rejectWithValue }) => {
    try {
      const response = await rootsApi.create(rootData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to create root');
    }
  }
);

const rootsSlice = createSlice({
  name: 'roots',
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
      // Fetch roots
      .addCase(fetchRoots.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRoots.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchRoots.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create root
      .addCase(createRoot.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createRoot.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(createRoot.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = rootsSlice.actions;
export default rootsSlice.reducer;

