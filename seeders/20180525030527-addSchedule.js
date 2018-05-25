'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Schedules',[{
    from : "bandung",
    destination : "jakarta",
    price : "50000",
    max_customer : 2,
    date : "26 May 2018",
    createdAt : new Date(),
    updatedAt : new Date ()
  },{
    from : "yogyakarta",
    destination : "semarang",
    price : "20000",
    max_customer : 2,
    date : "27 May 2018",
    createdAt : new Date(),
    updatedAt : new Date ()
  },{
    from : "merak",
    destination : "jakarta",
    price : "50000",
    max_customer : 1,
    date : "25 May 2018",
    createdAt : new Date(),
    updatedAt : new Date ()
  },{
    from : "dunia",
    destination : "akhirat",
    price : "50000",
    max_customer : 3,
    date : "25 May 2018",
    createdAt : new Date(),
    updatedAt : new Date ()
  }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
