/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const spells = [
      {
        name: 'Lumos',
        description: 'Создает свет на конце палочки',
        type: 'utility',
        difficulty: 'beginner',
        wand_movement: 'Плавный взмах',
        pronunciation: 'LOO-mos',
        is_canon: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Incendio',
        description: 'Создает огонь',
        type: 'attack',
        difficulty: 'intermediate',
        wand_movement: 'Резкий взмах вниз',
        pronunciation: 'in-SEN-dee-o',
        is_canon: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Protego',
        description: 'Создает защитный барьер',
        type: 'defense',
        difficulty: 'intermediate',
        wand_movement: 'Круговое движение',
        pronunciation: 'pro-TAY-go',
        is_canon: true,
        createdAt: now,
        updatedAt: now,
      },
    ];

    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert('Spells', spells, { transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Spells', null, {});
  },
};
