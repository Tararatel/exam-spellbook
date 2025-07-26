/* eslint-disable class-methods-use-this */
import Word from '../../db/models/index.js';

class WordService {
  async getAllWords() {
    return Word.findAll();
  }

  async getWordById(id) {
    const word = await Word.findByPk(id);
    if (!word) throw new Error('Слово не найдено');
    return word;
  }

  async createWord(data) {
    return Word.create(data);
  }

  async updateWord(id, data) {
    const word = await Word.findByPk(id);
    if (!word) throw new Error('Слово не найдено');
    return word.update(data);
  }

  async deleteWord(id) {
    const word = await Word.findByPk(id);
    if (!word) throw new Error('Слово не найдено');
    await word.destroy();
    return { message: 'Слово удалено' };
  }
}

export default new WordService();
