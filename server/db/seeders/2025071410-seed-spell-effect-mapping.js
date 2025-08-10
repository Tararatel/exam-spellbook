/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const spellEffectMappings = [
      { spell_id: 1, effect_id: 1, createdAt: now, updatedAt: now },
      { spell_id: 2, effect_id: 2, createdAt: now, updatedAt: now },
      { spell_id: 3, effect_id: 3, createdAt: now, updatedAt: now },
      { spell_id: 4, effect_id: 4, createdAt: now, updatedAt: now },
      { spell_id: 5, effect_id: 5, createdAt: now, updatedAt: now },
      { spell_id: 6, effect_id: 6, createdAt: now, updatedAt: now },
      { spell_id: 7, effect_id: 7, createdAt: now, updatedAt: now },
      { spell_id: 8, effect_id: 8, createdAt: now, updatedAt: now },
      { spell_id: 9, effect_id: 9, createdAt: now, updatedAt: now },
    ];

    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert('SpellEffectMappings', spellEffectMappings, {
        transaction,
      });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SpellEffectMappings', null, {});
  },
};
