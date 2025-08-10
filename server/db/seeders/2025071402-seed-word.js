export default {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const words = [
      {
        word: 'lum',
        type: 'root',
        meaning: 'Свет',
        language: 'latin',
        category: 'element',
        createdAt: now,
        updatedAt: now,
      },
      {
        word: 'os',
        type: 'suffix',
        meaning: 'Создание или активация',
        language: 'latin',
        category: 'action',
        createdAt: now,
        updatedAt: now,
      },
      {
        word: 'incend',
        type: 'root',
        meaning: 'Огонь',
        language: 'latin',
        category: 'element',
        createdAt: now,
        updatedAt: now,
      },
      {
        word: 'maxi',
        type: 'prefix',
        meaning: 'Усиление',
        language: 'latin',
        category: 'modifier',
        createdAt: now,
        updatedAt: now,
      },
      {
        word: 'protego',
        type: 'word',
        meaning: 'Защита',
        language: 'latin',
        category: 'defense',
        createdAt: now,
        updatedAt: now,
      },
      {
        word: 'aqua',
        type: 'root',
        meaning: 'Вода',
        language: 'latin',
        category: 'element',
        createdAt: now,
        updatedAt: now,
      },
      {
        word: 'ventus',
        type: 'root',
        meaning: 'Ветер',
        language: 'latin',
        category: 'element',
        createdAt: now,
        updatedAt: now,
      },
      {
        word: 'terra',
        type: 'root',
        meaning: 'Земля',
        language: 'latin',
        category: 'element',
        createdAt: now,
        updatedAt: now,
      },
      {
        word: 'cura',
        type: 'root',
        meaning: 'Лечение',
        language: 'latin',
        category: 'healing',
        createdAt: now,
        updatedAt: now,
      },
      {
        word: 'nox',
        type: 'word',
        meaning: 'Тьма',
        language: 'latin',
        category: 'element',
        createdAt: now,
        updatedAt: now,
      },
      {
        word: 'volo',
        type: 'root',
        meaning: 'Полет',
        language: 'latin',
        category: 'movement',
        createdAt: now,
        updatedAt: now,
      },
      {
        word: 'fortis',
        type: 'prefix',
        meaning: 'Сила',
        language: 'latin',
        category: 'modifier',
        createdAt: now,
        updatedAt: now,
      },
      {
        word: 'silens',
        type: 'word',
        meaning: 'Тишина',
        language: 'latin',
        category: 'utility',
        createdAt: now,
        updatedAt: now,
      },
    ];

    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert('Words', words, { transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Words', null, {});
  },
};
