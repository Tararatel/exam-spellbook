/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const spellEffects = [
      {
        name: 'Освещение',
        description: 'Создает источник света',
        category: 'physical',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Возгорание',
        description: 'Вызывает огонь или искры',
        category: 'physical',
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
