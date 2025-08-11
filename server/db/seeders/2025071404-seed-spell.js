export default {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const spells = [
      {
        name: 'Lumos',
        description: 'Создает свет на конце палочки',
        pronunciation: 'LOO-mos',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Incendio',
        description: 'Создает огонь',
        pronunciation: 'in-SEN-dee-o',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Protego',
        description: 'Создает защитный барьер',
        pronunciation: 'pro-TAY-go',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'AquaFlux',
        description: 'Манипулирует водной энергией',
        pronunciation: 'AH-qua-flux',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'VentusGale',
        description: 'Создаёт порыв ветра',
        pronunciation: 'VEN-tus-gale',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'TerraGuard',
        description: 'Поднимает каменную стену',
        pronunciation: 'TER-ra-guard',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'CuraVita',
        description: 'Исцеляет раны',
        pronunciation: 'KYOO-ra-VEE-ta',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'NoxVeil',
        description: 'Окутывает область тенью',
        pronunciation: 'nox-veil',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'VoloLev',
        description: 'Поднимает объект в воздух',
        pronunciation: 'VO-lo-lev',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Fortify',
        description: 'Усиливает свойства цели',
        pronunciation: 'for-TEE-fy',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Silencio',
        description: 'Создаёт зону тишины',
        pronunciation: 'sil-EN-tee-oh',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Maximus',
        description: 'Усиливает мощность заклинания',
        pronunciation: 'MAX-i-mus',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'ElementalBurst',
        description: 'Мощный взрыв элементальной энергии',
        pronunciation: 'ele-MEN-tal-burst',
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
