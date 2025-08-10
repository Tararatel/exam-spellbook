/* eslint-disable class-methods-use-this */
import db from '../../db/models/index.js';
import { Op } from 'sequelize';
import logger from '../utils/logger.js';

const { Spell, Word, SpellEffect, SpellComponent, SpellEffectMapping, Rule } = db;

class SpellService {
  async getAllSpells() {
    const spells = await Spell.findAll({
      include: [
        {
          model: Word,
          through: {
            model: SpellComponent,
          },
        },
      ],
    });
    return spells;
  }

  async getSpellById(id) {
    const spell = await Spell.findByPk(id, {
      attributes: [
        'id',
        'name',
        'description',
        'type',
        'difficulty',
        'wand_movement',
        'pronunciation',
        'is_canon',
        'createdAt',
        'updatedAt',
      ],
      include: [
        {
          model: Word,
          attributes: ['id', 'word', 'type', 'meaning', 'language', 'category'],
          through: {
            model: SpellComponent,
            attributes: ['position'],
          },
        },
        {
          model: SpellEffect,
          attributes: ['id', 'effect_name', 'description', 'category'],
          through: {
            attributes: [],
          },
        },
      ],
    });
    if (!spell) throw new Error('Заклинание не найдено');
    return spell;
  }

  async createSpell(data) {
    
    try {
      if (!data.pronunciation) {
        data.pronunciation = data.name.toLowerCase().replace(/\s/g, '');
      }

      const { Words, ...spellData } = data;

      console.log(spellData, 'spellData');
      console.log(Words, 'Words');
      const spell = await Spell.create({
        ...spellData,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      
      

      if (Array.isArray(Words)) {
        for (const word of Words) {
          await SpellComponent.create({
            spell_id: spell.id,
            word_id: word.id,
            position: word.type === 'word' ? 'root' : word.type,
          });
        }
      }

      const newSpell = await Spell.findByPk(spell.id, {
        include: [
          {
            model: Word,
            through: {
              model: SpellComponent,
            },
          },
        ],
      });

      console.log(newSpell, 'newSpell');
      

      return newSpell;
    } catch (error) {
      console.log(error, 'error');
      
      throw new Error(`Заклинание не создано: ${error.message}`);
    }
  }

  async updateSpell(id, data) {
    try {
      const spell = await Spell.findByPk(id);
      if (!spell) throw new Error('Заклинание не найдено');

      await spell.update(data);

      const newSpell = await Spell.findByPk(spell.id, {
        include: [
          {
            model: Word,
            through: {
              model: SpellComponent,
            },
          },
        ],
      });

      return newSpell;
    } catch (error) {
      throw new Error(`Заклинание не обновлено: ${error.message}`);
    }
  }

  async deleteSpell(id) {
    try {
      const spell = await Spell.findByPk(id);
      if (!spell) throw new Error('Заклинание не найдено');
      await SpellComponent.destroy({
        where: { spell_id: id },
      });
      await SpellEffectMapping.destroy({
        where: { spell_id: id },
      });
      await spell.destroy();
      logger.info('Заклинание удалено');
      return { message: 'Заклинание удалено' };
    } catch (error) {
      logger.error(`Заклинание не удалено: ${error.message}`);
      throw new Error(`Заклинание не удалено: ${error.message}`);
    }
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
