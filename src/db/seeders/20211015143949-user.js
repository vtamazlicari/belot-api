'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Jon Doe',
        email: 'jondoe@mail.com',
        password: 'naksdhaskd',
        isGuest: false,
      },
      {
        name: 'Vasile Schiopu',
        email: 'vasileshchiopu@mail.com',
        password: 'naksddsahaskd',
        isGuest: false,
      },
      {
        name: 'Ion Noroc',
        email: 'ionnoroc@mail.com',
        password: 'naksdaAhsasdaskd',
        isGuest: false,
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
