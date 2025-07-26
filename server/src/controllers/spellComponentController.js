/* eslint-disable class-methods-use-this */
import SpellComponentService from '../services/spellComponentService.js';

class SpellComponentController {
  async getAllSpellComponents(req, res, next) {
    try {
      const components = await SpellComponentService.getAllSpellComponents();
      res.json(components);
    } catch (error) {
      next(error);
    }
  }

  async getSpellComponentById(req, res, next) {
    try {
      const component = await SpellComponentService.getSpellComponentById(req.params.id);
      res.json(component);
    } catch (error) {
      next(error);
    }
  }

  async createSpellComponent(req, res, next) {
    try {
      const component = await SpellComponentService.createSpellComponent(req.body);
      res.status(201).json(component);
    } catch (error) {
      next(error);
    }
  }

  async updateSpellComponent(req, res, next) {
    try {
      const component = await SpellComponentService.updateSpellComponent(
        req.params.id,
        req.body,
      );
      res.json(component);
    } catch (error) {
      next(error);
    }
  }

  async deleteSpellComponent(req, res, next) {
    try {
      const result = await SpellComponentService.deleteSpellComponent(req.params.id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default new SpellComponentController();
