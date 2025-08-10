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