/* eslint-disable class-methods-use-this */
import db from '../../db/models/index.js';

const { SpellEffectMapping } = db;

class SpellEffectMappingService {
  async getAllSpellEffectMappings() {
    return SpellEffectMapping.findAll();
  }

  async getSpellEffectMappingById(id) {
    const mapping = await SpellEffectMapping.findByPk(id);
    if (!mapping) throw new Error('Сопоставление эффекта заклинания не найдено');
    return mapping;
  }

  async createSpellEffectMapping(data) {
    return SpellEffectMapping.create(data);
  }

  async updateSpellEffectMapping(id, data) {
    const mapping = await SpellEffectMapping.findByPk(id);
    if (!mapping) throw new Error('Сопоставление эффекта заклинания не найдено');
    return mapping.update(data);
  }

  async deleteSpellEffectMapping(id) {
    const mapping = await SpellEffectMapping.findByPk(id);
    if (!mapping) throw new Error('Сопоставление эффекта заклинания не найдено');
    await mapping.destroy();
    return { message: 'Сопоставление эффекта заклинания удалено' };
  }
}

export default new SpellEffectMappingService();
