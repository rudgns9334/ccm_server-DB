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
        content: 'gggg'
        // createdAt: faker.date.recent(),
        // updatedAt: faker.date.recent()
        },
        {
        number: 2,
        name: 'dfs',
        professor:'ha',
        try: 5,
        content: '이잉'
        // createdAt: faker.date.recent(),
        // updatedAt: faker.date.recent()
        },
        {
        number: 3,
        name: 'bfs',
        professor:'ta',
        try: 7,
        content: '살려줘'
        // createdAt: faker.date.recent(),
        // updatedAt: faker.date.recent()
        },
        {
        number: 4,
        name: 'hill',
        professor:'gagag',
        try: 8,
        content: '우오에엥'
        // createdAt: faker.date.recent(),
        // updatedAt: faker.date.recent()
        },
        {
          number: 5,
          name: 'sibal',
          professor:'hhhh',
          try: 10,
          content: '후어어어어어어엉'
          // createdAt: faker.date.recent(),
          // updatedAt: faker.date.recent()
          }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('problems', null, {});
    
  }
};
