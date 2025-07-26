/* eslint-disable class-methods-use-this */
import SpellService from '../services/spellService.js';

class SpellController {
  async getAllSpells(req, res, next) {
    try {
      const spells = await SpellService.getAllSpells();
      res.json(spells);
    } catch (error) {
      next(error);
    }
  }

  async getSpellById(req, res, next) {
    try {
      const spell = await SpellService.getSpellById(req.params.id);
      res.json(spell);
    } catch (error) {
      next(error);
    }
  }

  async createSpell(req, res, next) {
    try {
      const spell = await SpellService.createSpell(req.body);
      res.status(201).json(spell);
    } catch (error) {
      next(error);
    }
  }

  async updateSpell(req, res, next) {
    try {
      const spell = await SpellService.updateSpell(req.params.id, req.body);
      res.json(spell);
    } catch (error) {
      next(error);
    }
  }

  async deleteSpell(req, res, next) {
    try {
      const result = await SpellService.deleteSpell(req.params.id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async generateSpell(req, res, next) {
    try {
      const spell = await SpellService.generateSpell();
      res.status(201).json(spell);
    } catch (error) {
      next(error);
    }
  }
}

export default new SpellController();
