'use strict';

const faker = require('faker');
const bcrypt = require('bcryptjs');

const number = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]
const mentoring = [...Array(20)].map((mentoring, index) => ({
  number: number[index],
  name: faker.name.lastName(),
  content: faker.internet.email(),
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent()
}));

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mentorings', mentoring, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mentorings', null, {});
  }
};
