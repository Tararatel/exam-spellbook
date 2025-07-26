/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SpellEffectMappings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      spell_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Spells',
          key: 'id',
        },
      },
      effect_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'SpellEffects',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SpellEffectMappings');
  },
};
