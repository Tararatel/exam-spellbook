/* eslint-disable class-methods-use-this */
import db from '../../db/models/index.js';

const { SpellComponent } = db;

class SpellComponentService {
  async getAllSpellComponents() {
    return SpellComponent.findAll();
  }

  async getSpellComponentById(id) {
    const component = await SpellComponent.findByPk(id);
    if (!component) throw new Error('Компонент заклинания не найден');
    return component;
  }

  async createSpellComponent(data) {
    return SpellComponent.create(data);
  }

  async updateSpellComponent(id, data) {
    const component = await SpellComponent.findByPk(id);
    if (!component) throw new Error('Компонент заклинания не найден');
    return component.update(data);
  }

  async deleteSpellComponent(id) {
    const component = await SpellComponent.findByPk(id);
    if (!component) throw new Error('Компонент заклинания не найден');
    await component.destroy();
    return { message: 'Компонент заклинания удалён' };
  }
}

export default new SpellComponentService();
