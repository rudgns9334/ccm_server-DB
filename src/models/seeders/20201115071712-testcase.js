'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('testcases', [
        {
          number: 2,
          input: '2 3',
          output:'5', 
        },
        {
          number: 2,
          input: '23 21',
          output: '44'
        }
      ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('testcases', null, {});
  }
};
