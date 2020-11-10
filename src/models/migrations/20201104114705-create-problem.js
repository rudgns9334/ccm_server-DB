'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('problems', {
      number: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      professor: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      try: {
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING(1000),
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('problems');
  }
};