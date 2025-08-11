import { configureStore } from '@reduxjs/toolkit';
import wordsReducer from '@/entities/Words/model/wordsSlice';
import spellsReducer from '@/entities/Spells/model/spellsSlice';
import spellComponentsReducer from '@/entities/SpellComponents/model/spellComponentsSlice';

export const store = configureStore({
  reducer: {
    words: wordsReducer,
    spells: spellsReducer,
    spellComponents: spellComponentsReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
