/* eslint-disable class-methods-use-this */
import db from '../../db/models/index.js';

const { SpellEffect } = db;

class SpellEffectService {
  async getAllSpellEffects() {
    return SpellEffect.findAll();
  }

  async getSpellEffectById(id) {
    const effect = await SpellEffect.findByPk(id);
    if (!effect) throw new Error('Эффект заклинания не найден');
    return effect;
  }

  async createSpellEffect(data) {
    return SpellEffect.create(data);
  }

  async updateSpellEffect(id, data) {
    const effect = await SpellEffect.findByPk(id);
    if (!effect) throw new Error('Эффект заклинания не найден');
    return effect.update(data);
  }

  async deleteSpellEffect(id) {
    const effect = await SpellEffect.findByPk(id);
    if (!effect) throw new Error('Эффект заклинания не найден');
    await effect.destroy();
    return { message: 'Эффект заклинания удалён' };
  }
}

export default new SpellEffectService();
