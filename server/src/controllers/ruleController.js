/* eslint-disable class-methods-use-this */
import RuleService from '../services/ruleService.js';

class RuleController {
  async getAllRules(req, res, next) {
    try {
      const rules = await RuleService.getAllRules();
      res.json(rules);
    } catch (error) {
      next(error);
    }
  }

  async getRuleById(req, res, next) {
    try {
      const rule = await RuleService.getRuleById(req.params.id);
      res.json(rule);
    } catch (error) {
      next(error);
    }
  }

  async createRule(req, res, next) {
    try {
      const rule = await RuleService.createRule(req.body);
      res.status(201).json(rule);
    } catch (error) {
      next(error);
    }
  }

  async updateRule(req, res, next) {
    try {
      const rule = await RuleService.updateRule(req.params.id, req.body);
      res.json(rule);
    } catch (error) {
      next(error);
    }
  }

  async deleteRule(req, res, next) {
    try {
      const result = await RuleService.deleteRule(req.params.id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default new RuleController();
