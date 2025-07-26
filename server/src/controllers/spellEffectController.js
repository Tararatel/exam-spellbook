/* eslint-disable class-methods-use-this */
import SpellEffectService from '../services/spellEffectService.js';

class SpellEffectController {
  async getAllSpellEffects(req, res, next) {
    try {
      const effects = await SpellEffectService.getAllSpellEffects();
      res.json(effects);
    } catch (error) {
      next(error);
    }
  }

  async getSpellEffectById(req, res, next) {
    try {
      const effect = await SpellEffectService.getSpellEffectById(req.params.id);
      res.json(effect);
    } catch (error) {
      next(error);
    }
  }

  async createSpellEffect(req, res, next) {
    try {
      const effect = await SpellEffectService.createSpellEffect(req.body);
      res.status(201).json(effect);
    } catch (error) {
      next(error);
    }
  }

  async updateSpellEffect(req, res, next) {
    try {
      const effect = await SpellEffectService.updateSpellEffect(req.params.id, req.body);
      res.json(effect);
    } catch (error) {
      next(error);
    }
  }

  async deleteSpellEffect(req, res, next) {
    try {
      const result = await SpellEffectService.deleteSpellEffect(req.params.id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default new SpellEffectController();
