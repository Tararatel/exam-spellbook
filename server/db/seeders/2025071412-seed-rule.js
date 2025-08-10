/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const rules = [
      {
        rule_type: 'combination',
        description: 'Корень "lum" может сочетаться с суффиксом "os".',
        word_type: 'root',
        allowed_combinations: JSON.stringify(['lum', 'os']),
        createdAt: now,
        updatedAt: now,
      },
      {
        rule_type: 'restriction',
        description: 'Префикс "maxi" не сочетается с суффиксом "os".',
        word_type: 'prefix',
        allowed_combinations: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        rule_type: 'combination',
        description: 'Префикс "maxi" может усиливать корень "incend".',
        word_type: 'prefix',
        allowed_combinations: JSON.stringify(['maxi', 'incend']),
        createdAt: now,
        updatedAt: now,
      },
      {
        rule_type: 'combination',
        description: 'Корень "aqua" может сочетаться с суффиксом "os".',
        word_type: 'root',
        allowed_combinations: JSON.stringify(['aqua', 'os']),
        createdAt: now,
        updatedAt: now,
      },
      {
        rule_type: 'restriction',
        description: 'Слово "protego" не сочетается с корнем "incend".',
        word_type: 'word',
        allowed_combinations: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        rule_type: 'combination',
        description: 'Корень "ventus" может сочетаться с суффиксом "os".',
        word_type: 'root',
        allowed_combinations: JSON.stringify(['ventus', 'os']),
        createdAt: now,
        updatedAt: now,
      },
      {
        rule_type: 'combination',
        description: 'Префикс "fortis" усиливает защитные слова (например, "protego").',
        word_type: 'prefix',
        allowed_combinations: JSON.stringify(['fortis', 'protego']),
        createdAt: now,
        updatedAt: now,
      },
      {
        rule_type: 'combination',
        description: 'Корень "cura" может сочетаться с суффиксом "os".',
        word_type: 'root',
        allowed_combinations: JSON.stringify(['cura', 'os']),
        createdAt: now,
        updatedAt: now,
      },
      {
        rule_type: 'restriction',
        description: 'Корень "incend" не должен сочетаться с корнем "nox".',
        word_type: 'root',
        allowed_combinations: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        rule_type: 'combination',
        description: 'Слово "protego" совместимо с префиксом "fortis".',
        word_type: 'word',
        allowed_combinations: JSON.stringify(['protego', 'fortis']),
        createdAt: now,
        updatedAt: now,
      },
      {
        rule_type: 'restriction',
        description: 'Слово "silens" нельзя использовать одновременно с "volo".',
        word_type: 'word',
        allowed_combinations: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        rule_type: 'combination',
        description: 'Корень "terra" хорошо работает с защитными словами (protego).',
        word_type: 'root',
        allowed_combinations: JSON.stringify(['terra', 'protego']),
        createdAt: now,
        updatedAt: now,
      },
      {
        rule_type: 'combination',
        description: 'Корень "volo" может сочетаться с суффиксом "os".',
        word_type: 'root',
        allowed_combinations: JSON.stringify(['volo', 'os']),
        createdAt: now,
        updatedAt: now,
      },
      {
        rule_type: 'restriction',
        description: 'Префикс "maxi" не должен применяться к исцеляющим корням (cura).',
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
