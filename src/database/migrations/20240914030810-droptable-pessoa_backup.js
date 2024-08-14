'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Aqui você pode adicionar as alterações que você quer fazer na tabela
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pessoas_backup');
  },
};
