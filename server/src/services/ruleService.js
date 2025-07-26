/* eslint-disable class-methods-use-this */
import Rule from '../../db/models/index.js';

class RuleService {
  async getAllRules() {
    return Rule.findAll();
  }

  async getRuleById(id) {
    const rule = await Rule.findByPk(id);
    if (!rule) throw new Error('Правило не найдено');
    return rule;
  }

  async createRule(data) {
    return Rule.create(data);
  }

  async updateRule(id, data) {
    const rule = await Rule.findByPk(id);
    if (!rule) throw new Error('Правило не найдено');
    return rule.update(data);
  }

  async deleteRule(id) {
    const rule = await Rule.findByPk(id);
    if (!rule) throw new Error('Правило не найдено');
    await rule.destroy();
    return { message: 'Правило удалено' };
  }
}

export default new RuleService();
