'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      // as associações são feitas nas duas "pontas" do 1-muitos. Documentação do Sequelize sobre Associações: https://sequelize.org/master/manual/assocs.html#one-to-many-relationships
      Author.hasMany(models.Book, {
        foreignKey: 'author_id'
      })
    }
  };
  Author.init({
    name: DataTypes.STRING,
    alive: DataTypes.BOOLEAN,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};