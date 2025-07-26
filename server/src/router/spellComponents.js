import express from 'express';
import spellComponentController from '../controllers/spellComponentController.js';

const router = express.Router();

router.get('/', spellComponentController.getAllSpellComponents);
router.get('/:id', spellComponentController.getSpellComponentById);
router.post('/', spellComponentController.createSpellComponent);
router.put('/:id', spellComponentController.updateSpellComponent);
router.delete('/:id', spellComponentController.deleteSpellComponent);

export default router;
