'use strict';
module.exports = (sequelize, DataTypes) => {
  const mentoring = sequelize.define('mentoring', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    number: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(20)
    },
    content: {
      type: DataTypes.STRING(10000)
    },
    // createdAt: {
    //   allowNull: false,
    //   type: DataTypes.DATE,
    //   get: function () {
    //     const time = this.getDataValue('date');
    //     if (moment(time, moment.ISO_8601, true).isValid()) {
    //       return {
    //         day: moment(time).format('YYYY-MM-DD'),
    //         time: moment(time).format('HH:mm:ss'),
    //       };
    //     }
    //     return time;
    //   }
    // },
    // updatedAt: {
    //   allowNull: false,
    //   type: DataTypes.DATE,
    //   get: function () {
    //     const time = this.getDataValue('date');
    //     if (moment(time, moment.ISO_8601, true).isValid()) {
    //       return {
    //         day: moment(time).format('YYYY-MM-DD'),
    //         time: moment(time).format('HH:mm:ss'),
    //       };
    //     }
    //     return time;
    //   }
    // }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'mentorings',
  });
  mentoring.associate = function(models) {
    // associations can be defined here
    // mentoring.belongTo(model.problem, {
    //   foreignKey: "number"
    // })
  };
  return mentoring;
};