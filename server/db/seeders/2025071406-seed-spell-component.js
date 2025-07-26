/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const spellComponents = [
      {
        spell_id: 1,
        word_id: 1,
        position: 'root',
        createdAt: now,
        updatedAt: now,
      },
      {
        spell_id: 1,
        word_id: 2,
        position: 'suffix',
        createdAt: now,
        updatedAt: now,
      },
      {
        spell_id: 2,
        word_id: 3,
        position: 'root',
        createdAt: now,
        updatedAt: now,
      },
      {
        spell_id: 3,
        word_id: 5,
        position: 'root',
        createdAt: now,
        updatedAt: now,
      },
    ];

    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert('SpellComponents', spellComponents, {
        transaction,
      });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SpellComponents', null, {});
  },
};
