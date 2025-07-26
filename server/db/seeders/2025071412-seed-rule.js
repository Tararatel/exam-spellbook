/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const rules = [
      {
        rule_type: 'combination',
        description: 'Корень "lum" может сочетаться с суффиксом "os"',
        word_type: 'root',
        allowed_combinations: JSON.stringify(['lum', 'os']), // Преобразуем массив в JSON-строку
        createdAt: now,
        updatedAt: now,
      },
      {
        rule_type: 'restriction',
        description: 'Префикс "maxi" не сочетается с суффиксом "os"',
        word_type: 'prefix',
        allowed_combinations: null,
        createdAt: now,
        updatedAt: now,
      },
    ];

    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert('Rules', rules, { transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rules', null, {});
  },
};
