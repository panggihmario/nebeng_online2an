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
        from : "jakarta",
        destination : "bandung",
        price : "50000",
        max_customer : 2,
        date : "25 May 2018",
        createdAt : new Date(),
        updatedAt : new Date ()
      },{
        from : "jakarta",
        destination : "banten",
        price : "50000",
        max_customer : 2,
        date : "25 May 2018",
        createdAt : new Date(),
        updatedAt : new Date ()
      },{
        from : "jakarta",
        destination : "tangerang",
        price : "50000",
        max_customer : 1,
        date : "25 May 2018",
        createdAt : new Date(),
        updatedAt : new Date ()
      },{
        from : "jakarta",
        destination : "merak",
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
