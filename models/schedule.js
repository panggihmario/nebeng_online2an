'use strict';
module.exports = (sequelize, DataTypes) => {
  var Schedule = sequelize.define('Schedule', {
    from: DataTypes.STRING,
    destination: DataTypes.STRING,
    price: DataTypes.INTEGER,
    date: DataTypes.STRING,
    providerId: DataTypes.INTEGER,
    maxConsumer: DataTypes.INTEGER
  }, {});
  Schedule.associate = function(models) {
    // associations can be defined here
  };
  return Schedule;
};