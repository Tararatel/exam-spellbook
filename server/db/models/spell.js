import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Spell extends Model {
    static associate(models) {
      Spell.belongsToMany(models.Word, {
        through: models.SpellComponent,
        foreignKey: 'spell_id',
      });
      Spell.belongsToMany(models.SpellEffect, {
        through: models.SpellEffectMapping,
        foreignKey: 'spell_id',
      });
    }
  }
  Spell.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      // type: {
      //   type: DataTypes.ENUM('attack', 'defense', 'utility', 'healing', 'charm'),
      //   allowNull: false,
      // },
      // difficulty: {
      //   type: DataTypes.ENUM('beginner', 'intermediate', 'advanced'),
      //   allowNull: false,
      // },
      // wand_movement: {
      //   type: DataTypes.TEXT,
      //   allowNull: true,
      // },
      pronunciation: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      // is_canon: {
      //   type: DataTypes.BOOLEAN,
      //   allowNull: false,
      //   defaultValue: false,
      // },
    },
    {
      sequelize,
      modelName: 'Spell',
    },
  );
  return Spell;
};
