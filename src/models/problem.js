
module.exports = (sequelize, DataTypes) => {
  const problem = sequelize.define('problem', {
    number: {
      type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
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
    content: {
      type: DataTypes.STRING(1000)
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'problems',
  });
  problem.associate = function(models) {
    // associations can be defined here
    // problem.hasMany(models.mentoring);   
  };
  return problem;
};