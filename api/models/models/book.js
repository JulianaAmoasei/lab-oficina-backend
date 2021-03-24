'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      // as associações são feitas nas duas "pontas" do 1-muitos. Documentação do Sequelize sobre Associações: https://sequelize.org/master/manual/assocs.html#one-to-many-relationships
      Book.belongsTo(models.Author, {
        foreignKey: 'author_id'
      })
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