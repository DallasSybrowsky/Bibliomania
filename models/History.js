const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class History extends Model {}

History.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    isbn: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'books',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "history",
  }
);

module.exports = History;
