'use strict';

const faker = require('faker');
const bcrypt = require('bcryptjs');

const number = [1,2,3,4,5,1,2,3,4,5]
const content = ['<p><span style="font-size: 30px;">마! 이게 마크다운이다!</span></p>\n',
'<p><span style="color: rgb(41,105,176);"><strong>질문을 해봐라 마!</strong></span></p>\n',
'<p><ins>마이묵읏다이가!</ins></p>\n',
'<p>오징어뜹밥!</p>\n',
'<p>이것이 멘토링이라 안카나!</p>\n',
'<h4><strong><em>안녕하세요.</em></strong></h4>\n',
'<h1><span style="font-family: Verdana;"><del>감사해요</del></span></h1>\n',
'<p><span style="color: rgb(85,57,130);font-size: 24px;font-family: Times New Roman;"><code>잘있어요ㅎㅎㅎㅎ</code></span></p>\n',
'<blockquote><span style="color: rgb(0,168,133);"><del><strong><em><ins>다시만나요~</ins></em></strong></del></span></blockquote>\n',
'<h2><strong>마지막이다. 이상으로 이게 마크다운이다. 였습니다.</strong></h2>\n']
const mentoring = [...Array(10)].map((mentoring, index) => ({
  number: number[index],
  name: faker.name.lastName(),
  content: content[index],
  // createdAt: faker.date.recent(),
  // updatedAt: faker.date.recent()
}));

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mentorings', mentoring, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mentorings', null, {});
  }
};
