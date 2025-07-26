/* eslint-disable class-methods-use-this */
import SpellEffectMappingService from '../services/spellEffectMappingService.js';

class SpellEffectMappingController {
  async getAllSpellEffectMappings(req, res, next) {
    try {
      const mappings = await SpellEffectMappingService.getAllSpellEffectMappings();
      res.json(mappings);
    } catch (error) {
      next(error);
    }
  }

  async getSpellEffectMappingById(req, res, next) {
    try {
      const mapping = await SpellEffectMappingService.getSpellEffectMappingById(
        req.params.id,
      );
      res.json(mapping);
    } catch (error) {
      next(error);
    }
  }

  async createSpellEffectMapping(req, res, next) {
    try {
      const mapping = await SpellEffectMappingService.createSpellEffectMapping(req.body);
      res.status(201).json(mapping);
    } catch (error) {
      next(error);
    }
  }

  async updateSpellEffectMapping(req, res, next) {
    try {
      const mapping = await SpellEffectMappingService.updateSpellEffectMapping(
        req.params.id,
        req.body,
      );
      res.json(mapping);
    } catch (error) {
      next(error);
    }
  }

  async deleteSpellEffectMapping(req, res, next) {
    try {
      const result = await SpellEffectMappingService.deleteSpellEffectMapping(
        req.params.id,
      );
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default new SpellEffectMappingController();
