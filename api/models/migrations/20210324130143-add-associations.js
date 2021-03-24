'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Books', {
      fields: ['author_id'],
      type: 'foreign key',
      references: {
        table: 'Authors',
        field: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Books', {
      fields: ['author_id'],
      type: 'foreign key',
      references: {
        table: 'Authors',
        field: 'id'
      }
    })
  }
};
