'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      // define association here
    }
  };
  Book.init({
    title: DataTypes.STRING,
    author_id: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};