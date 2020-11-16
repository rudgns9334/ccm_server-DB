'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('testcases', [
        {
          number: 1,
          input: '0',
          output: '0'
        },
        {
          number: 1,
          input: '1',
          output: '1'
        },
        {
          number: 1,
          input: '2',
          output: '1'
        },
        {
          number: 1,
          input: '3',
          output: '2'
        },
        {
          number: 1,
          input: '4',
          output: '3'
        },
        {
          number: 2,
          input: '2 3',
          output:'5', 
        },
        {
          number: 2,
          input: '3 4',
          output: '7'
        },
        {
          number: 2,
          input: '4 5',
          output: '9'
        },
        {
          number: 2,
          input: '5 6',
          output: '11'
        },
        {
          number: 2,
          input: '6 7',
          output: '13'
        },
        {
          number: 3,
          input: '2 3',
          output:'3', 
        },
        {
          number: 3,
          input: '3 4',
          output: '4'
        },
        {
          number: 3,
          input: '4 5',
          output: '5'
        },
        {
          number: 3,
          input: '5 6',
          output: '6'
        },
        {
          number: 3,
          input: '6 7',
          output: '7'
        },
      ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('testcases', null, {});
  }
};
