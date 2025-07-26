import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class SpellEffect extends Model {
    static associate(models) {
      SpellEffect.belongsToMany(models.Spell, {
        through: models.SpellEffectMapping,
        foreignKey: 'effect_id',
      });
    }
  }
  SpellEffect.init(
    {
      effect_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'SpellEffect',
    },
  );
  return SpellEffect;
};
