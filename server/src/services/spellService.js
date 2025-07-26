/* eslint-disable class-methods-use-this */
import Spell from '../../db/models/index.js';
import Word from '../../db/models/index.js';
import SpellEffect from '../../db/models/index.js';
import SpellComponent from '../../db/models/index.js';
import Rule from '../../db/models/index.js';
import { Op } from 'sequelize';

class SpellService {
  async getAllSpells() {
    return Spell.findAll({
      include: [
        { model: Word, through: SpellComponent },
        { model: SpellEffect, through: { attributes: [] } },
      ],
    });
  }

  async getSpellById(id) {
    const spell = await Spell.findByPk(id, {
      include: [
        { model: Word, through: SpellComponent },
        { model: SpellEffect, through: { attributes: [] } },
      ],
    });
    if (!spell) throw new Error('Заклинание не найдено');
    return spell;
  }

  async createSpell(data) {
    return Spell.create(data);
  }

  async updateSpell(id, data) {
    const spell = await Spell.findByPk(id);
    if (!spell) throw new Error('Заклинание не найдено');
    return spell.update(data);
  }

  async deleteSpell(id) {
    const spell = await Spell.findByPk(id);
    if (!spell) throw new Error('Заклинание не найдено');
    await spell.destroy();
    return { message: 'Заклинание удалено' };
  }

  async generateSpell() {
    const rules = await Rule.findAll({
      where: { rule_type: 'combination' },
      attributes: ['allowed_combinations'],
    });

    const words = await Word.findAll({
      where: {
        type: { [Op.in]: ['root', 'suffix', 'prefix'] },
      },
    });

    const combinationRule = rules.find((rule) => rule.allowed_combinations);
    if (!combinationRule) throw new Error('Не найдено действующих правил комбинаций');

    const allowed = combinationRule.allowed_combinations;
    const root = words.find((word) => word.word === allowed[0] && word.type === 'root');
    const suffix = words.find(
      (word) => word.word === allowed[1] && word.type === 'suffix',
    );

    if (!root || !suffix) throw new Error('Не найдено подходящих слов');

    const spellName = `${root.word}${suffix.word}`;
    const description = `Generated spell based on ${root.meaning} and ${suffix.meaning}`;
    const spell = await Spell.create({
      name: spellName,
      description,
      type: 'utility',
      difficulty: 'beginner',
      is_canon: false,
    });

    await SpellComponent.create({
      spell_id: spell.id,
      word_id: root.id,
      position: 'root',
    });
    await SpellComponent.create({
      spell_id: spell.id,
      word_id: suffix.id,
      position: 'suffix',
    });

    return spell;
  }
}

export default new SpellService();
