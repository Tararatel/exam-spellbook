import express from 'express';
import spellController from '../controllers/spellController.js';

const router = express.Router();

router.get('/', spellController.getAllSpells);
router.get('/:id', spellController.getSpellById);
router.post('/', spellController.createSpell);
router.put('/:id', spellController.updateSpell);
router.delete('/:id', spellController.deleteSpell);
router.post('/generate', spellController.generateSpell);

export default router;
