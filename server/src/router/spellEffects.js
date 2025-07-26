import express from 'express';
import spellEffectController from '../controllers/spellEffectController.js';

const router = express.Router();

router.get('/', spellEffectController.getAllSpellEffects);
router.get('/:id', spellEffectController.getSpellEffectById);
router.post('/', spellEffectController.createSpellEffect);
router.put('/:id', spellEffectController.updateSpellEffect);
router.delete('/:id', spellEffectController.deleteSpellEffect);

export default router;
