
module.exports = (sequelize, DataTypes) => {
  const problem = sequelize.define('problems', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    number: {
      type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    professor:{
      type: DataTypes.STRING(10),
      allowNull: false
    }, 
    try: {
      type: DataTypes.INTEGER
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
    tableName: 'problems',
  });
  problem.associate = function(models) {
    // associations can be defined here
    
  };
  return problem;
};