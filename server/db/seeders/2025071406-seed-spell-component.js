export default {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const spellComponents = [
      { spell_id: 1, word_id: 1, position: 'root', createdAt: now, updatedAt: now },
      { spell_id: 1, word_id: 2, position: 'suffix', createdAt: now, updatedAt: now },
      { spell_id: 2, word_id: 3, position: 'root', createdAt: now, updatedAt: now },
      { spell_id: 3, word_id: 5, position: 'root', createdAt: now, updatedAt: now },
      { spell_id: 4, word_id: 6, position: 'root', createdAt: now, updatedAt: now },
      { spell_id: 4, word_id: 2, position: 'suffix', createdAt: now, updatedAt: now },
      { spell_id: 5, word_id: 7, position: 'root', createdAt: now, updatedAt: now },
      { spell_id: 6, word_id: 8, position: 'root', createdAt: now, updatedAt: now },
      { spell_id: 6, word_id: 5, position: 'suffix', createdAt: now, updatedAt: now },
      { spell_id: 7, word_id: 9, position: 'root', createdAt: now, updatedAt: now },
      { spell_id: 7, word_id: 2, position: 'suffix', createdAt: now, updatedAt: now },
      { spell_id: 8, word_id: 10, position: 'root', createdAt: now, updatedAt: now },
      { spell_id: 9, word_id: 11, position: 'root', createdAt: now, updatedAt: now },
      { spell_id: 10, word_id: 12, position: 'prefix', createdAt: now, updatedAt: now },
      { spell_id: 10, word_id: 5, position: 'root', createdAt: now, updatedAt: now },
      { spell_id: 11, word_id: 13, position: 'suffix', createdAt: now, updatedAt: now },
      { spell_id: 12, word_id: 4, position: 'prefix', createdAt: now, updatedAt: now },
      { spell_id: 12, word_id: 5, position: 'root', createdAt: now, updatedAt: now },
      { spell_id: 13, word_id: 12, position: 'prefix', createdAt: now, updatedAt: now },
      { spell_id: 13, word_id: 3, position: 'root', createdAt: now, updatedAt: now },
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
