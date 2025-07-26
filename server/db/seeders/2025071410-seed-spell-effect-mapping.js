/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const spellEffectMappings = [
      {
        spell_id: 1,
        effect_id: 1,
        createdAt: now,
        updatedAt: now,
      },
      {
        spell_id: 2,
        effect_id: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        spell_id: 3,
        effect_id: 3,
        createdAt: now,
        updatedAt: now,
      },
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
