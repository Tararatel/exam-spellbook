/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SpellComponents', {
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
      word_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Words',
          key: 'id',
        },
      },
      position: {
        type: Sequelize.ENUM('prefix', 'root', 'suffix'),
        allowNull: false,
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
    await queryInterface.dropTable('SpellComponents');
  },
};
