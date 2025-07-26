import express from 'express';
import spellEffectMappingController from '../controllers/spellEffectMappingController.js';

const router = express.Router();

router.get('/', spellEffectMappingController.getAllSpellEffectMappings);
router.get('/:id', spellEffectMappingController.getSpellEffectMappingById);
router.post('/', spellEffectMappingController.createSpellEffectMapping);
router.put('/:id', spellEffectMappingController.updateSpellEffectMapping);
router.delete('/:id', spellEffectMappingController.deleteSpellEffectMapping);

export default router;
