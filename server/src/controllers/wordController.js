/* eslint-disable class-methods-use-this */
import WordService from '../services/wordService.js';

class WordController {
  async getAllWords(req, res, next) {
    try {
      const words = await WordService.getAllWords();
      res.json(words);
    } catch (error) {
      next(error);
    }
  }

  async getWordById(req, res, next) {
    try {
      const word = await WordService.getWordById(req.params.id);
      res.json(word);
    } catch (error) {
      next(error);
    }
  }

  async createWord(req, res, next) {
    try {
      const word = await WordService.createWord(req.body);
      res.status(201).json(word);
    } catch (error) {
      next(error);
    }
  }

  async updateWord(req, res, next) {
    try {
      const word = await WordService.updateWord(req.params.id, req.body);
      res.json(word);
    } catch (error) {
      next(error);
    }
  }

  async deleteWord(req, res, next) {
    try {
      const result = await WordService.deleteWord(req.params.id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default new WordController();
