/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const spellEffects = [
      {
        name: 'Освещение',
        description: 'Создает источник света',
        category: 'light',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Возгорание',
        description: 'Вызывает огонь или искры',
        category: 'fire',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Защита',
        description: 'Создает магический барьер',
        category: 'defense',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Водная сила',
        description: 'Манипуляция водой',
        category: 'water',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Ветровой порыв',
        description: 'Создает сильный ветер',
        category: 'wind',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Земная стена',
        description: 'Поднимает каменную преграду',
        category: 'earth',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Исцеление',
        description: 'Восстанавливает здоровье',
        category: 'healing',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Теневой покров',
        description: 'Создает область тьмы',
        category: 'dark',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Полёт',
        description: 'Позволяет левитировать',
        category: 'movement',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Усиление',
        description: 'Временно усиливает цель',
        category: 'buff',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Тишина',
        description: 'Блокирует звук',
        category: 'utility',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Мощь',
        description: 'Увеличивает силу заклинаний',
        category: 'power',
        createdAt: now,
        updatedAt: now,
      },
    ];

    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert('SpellEffects', spellEffects, { transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SpellEffects', null, {});
  },
};
