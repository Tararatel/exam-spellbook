import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Rule extends Model {
    static associate(models) {}
  }
  Rule.init(
    {
      rule_type: {
        type: DataTypes.ENUM('combination', 'restriction'),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      word_type: {
        type: DataTypes.ENUM('prefix', 'root', 'suffix', 'word'),
        allowNull: false,
      },
      allowed_combinations: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Rule',
    },
  );
  return Rule;
};
