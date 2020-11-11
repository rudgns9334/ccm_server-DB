'use strict';

//const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('problems', [
      {
        number: 1,
        name: '피보나치 함수',
        professor:'허정훈',
        try: 3,
        content: 'N이 주어졌을때, N까지의 피보나치 계산을 완료하는 프로그램을 작성하시오'
        // createdAt: faker.date.recent(),
        // updatedAt: faker.date.recent()
        },
        {
        number: 2,
        name: 'A+B',
        professor:'유태준',
        try: 5,
        content: 'A와 B가 주어졌을 때, A+B를 구하는 프로그램을 작성하시오.'
        // createdAt: faker.date.recent(),
        // updatedAt: faker.date.recent()
        },
        {
        number: 3,
        name: '두 수 비교하기',
        professor:'정경훈',
        try: 7,
        content: 'A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.'
        // createdAt: faker.date.recent(),
        // updatedAt: faker.date.recent()
        },
        {
        number: 4,
        name: '구구단',
        professor:'허정훈',
        try: 8,
        content: 'N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오.'
        // createdAt: faker.date.recent(),
        // updatedAt: faker.date.recent()
        },
        {
          number: 5,
          name: '정수 N개의 합',
          professor:'유태준',
          try: 10,
          content: '정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.'
          // createdAt: faker.date.recent(),
          // updatedAt: faker.date.recent()
          }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('problems', null, {});
    
  }
};
