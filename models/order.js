'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    consumer_id: DataTypes.INTEGER,
    schedule_id: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.Customer,{
      foreignKey : "consumer_id"
    })
    Order.belongsTo(models.Schedule,{
      foreignKey : "schedule_id"
    })
  };
  return Order;
};