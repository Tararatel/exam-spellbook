import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class SpellEffectMapping extends Model {
    static associate(models) {}
  }
  SpellEffectMapping.init(
    {
      spell_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Spells',
          key: 'id',
        },
      },
      effect_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'SpellEffects',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'SpellEffectMapping',
    },
  );
  return SpellEffectMapping;
};
