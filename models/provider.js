'use strict';
module.exports = (sequelize, DataTypes) => {
  var Provider = sequelize.define('Provider', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Provider.associate = function(models) {
    // associations can be defined here
  };
  return Provider;
};