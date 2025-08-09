import { configureStore } from '@reduxjs/toolkit';
import effectsReducer from '@/entities/Effects/model/effectsSlice';

export const store = configureStore({
  reducer: {
    effects: effectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
