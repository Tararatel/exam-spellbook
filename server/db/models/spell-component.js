import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class SpellComponent extends Model {
    static associate(models) {}
  }
  SpellComponent.init(
    {
      spell_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Spells',
          key: 'id',
        },
      },
      word_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Words',
          key: 'id',
        },
      },
      position: {
        type: DataTypes.ENUM('prefix', 'root', 'suffix'),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'SpellComponent',
    },
  );
  return SpellComponent;
};
