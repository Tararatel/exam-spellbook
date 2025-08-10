import { configureStore } from '@reduxjs/toolkit';
import effectsReducer from '@/entities/Effects/model/effectsSlice';
import wordsReducer from '@/entities/Words/model/wordsSlice';
import spellsReducer from '@/entities/Spells/model/spellsSlice';
import spellComponentsReducer from '@/entities/SpellComponents/model/spellComponentsSlice';
import spellEffectMappingsReducer from '@/entities/SpellEffectMappings/model/spellEffectMappingsSlice';
import rulesReducer from '@/entities/Rules/model/rulesSlice';

export const store = configureStore({
  reducer: {
    effects: effectsReducer,
    words: wordsReducer,
    spells: spellsReducer,
    spellComponents: spellComponentsReducer,
    spellEffectMappings: spellEffectMappingsReducer,
    rules: rulesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
