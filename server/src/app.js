/* eslint-disable no-unused-vars */
import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import wordRoutes from './router/words.js';
import spellRoutes from './router/spells.js';
import spellComponentRoutes from './router/spellComponents.js';
import spellEffectRoutes from './router/spellEffects.js';
import spellEffectMappingRoutes from './router/spellEffectMappings.js';
import ruleRoutes from './router/rules.js';

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/words', wordRoutes);
app.use('/api/spells', spellRoutes);
app.use('/api/spell-components', spellComponentRoutes);
app.use('/api/effects', spellEffectRoutes);
app.use('/api/spell-effect-mappings', spellEffectMappingRoutes);
app.use('/api/rules', ruleRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Бомбарда максима =(' });
});

export default app;
