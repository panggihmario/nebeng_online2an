'use strict';
const model = require('./')

module.exports = (sequelize, DataTypes) => {
  var Schedule = sequelize.define('Schedule', {
    from: DataTypes.STRING,
    destination: DataTypes.STRING,
    price: DataTypes.STRING,
    max_customer: DataTypes.INTEGER,
    date: DataTypes.STRING
  }, {});
  Schedule.associate = function(models) {
    // associations can be defined here
    Schedule.hasMany(models.Order,{
      foreignKey : "schedule_id"
    })
  };
  return Schedule;
};