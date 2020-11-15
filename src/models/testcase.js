'use strict';
module.exports = (sequelize, DataTypes) => {
  const testcase = sequelize.define('testcase', {
    number: DataTypes.INTEGER,
    input: DataTypes.STRING(100),
    output: DataTypes.STRING(100),
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'testcases'
  });
  testcase.associate = function(models) {
    // associations can be defined here
  };
  return testcase;
};