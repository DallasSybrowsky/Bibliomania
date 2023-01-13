const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Books extends Model { }

Books.init(
    {
        isbn: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "books",
    }
);

module.exports = Books;