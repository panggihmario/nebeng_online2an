'use strict';

module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    name: {
      type : DataTypes.STRING,
      validate : {
        isUnique : function(name,cb){
          Customer.findOne({where : {name : name}})
          .then((name)=>{
            if(name == undefined){
              cb()
            }else{
             console.log('name has already taken')
            // cb.send({messages : "name has already taken"})
            }
          })
        }
      }
    
    },
    phone: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
   
  });
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.hasMany(models.Order,{
      foreignKey : "consumer_id"
    })
  };
  return Customer;
};