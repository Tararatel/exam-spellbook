import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Word extends Model {
    static associate(models) {
      Word.belongsToMany(models.Spell, {
        through: models.SpellComponent,
        foreignKey: 'word_id',
      });
    }
  }
  Word.init(
    {
      word: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      type: {
        type: DataTypes.ENUM('root', 'prefix', 'suffix', 'word'),
        allowNull: false,
      },
      meaning: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      language: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Word',
    },
  );
  return Word;
};
