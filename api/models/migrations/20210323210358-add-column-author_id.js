'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
     'Books',
     'author_id',
     {
       type: Sequelize.INTEGER,
       allowNull: false,
     },
   )
 },

 down: async (queryInterface, Sequelize) => {
   await queryInterface.removeColumn('Books', 'author_id')
 }
};
