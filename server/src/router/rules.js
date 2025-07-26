import express from 'express';
import ruleController from '../controllers/ruleController.js';

const router = express.Router();

router.get('/', ruleController.getAllRules);
router.get('/:id', ruleController.getRuleById);
router.post('/', ruleController.createRule);
router.put('/:id', ruleController.updateRule);
router.delete('/:id', ruleController.deleteRule);

export default router;
