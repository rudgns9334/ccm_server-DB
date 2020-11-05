'use strict';

//const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('problems', [
      {
        number: 1,
        name: 'prims',
        professor:'jh',
        try: 3,
        // createdAt: faker.date.recent(),
        // updatedAt: faker.date.recent()
        },
        {
        number: 2,
        name: 'dfs',
        professor:'ha',
        try: 5,
        // createdAt: faker.date.recent(),
        // updatedAt: faker.date.recent()
        },
        {
        number: 3,
        name: 'bfs',
        professor:'ta',
        try: 7,
        // createdAt: faker.date.recent(),
        // updatedAt: faker.date.recent()
        },
        {
        number: 4,
        name: 'hill',
        professor:'gagag',
        try: 8,
        // createdAt: faker.date.recent(),
        // updatedAt: faker.date.recent()
        },
        {
          number: 5,
          name: 'sibal',
          professor:'hhhh',
          try: 10,
          // createdAt: faker.date.recent(),
          // updatedAt: faker.date.recent()
          }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('problems', null, {});
    
  }
};
