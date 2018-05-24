'use strict';
const model = require('./')
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
   
  });
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.belongsToMany(models.Schedule,{
      through : "Order",
      foreignKey : "consumer_id"
    })
  };
  return Customer;
};