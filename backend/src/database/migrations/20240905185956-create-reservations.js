'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reservation_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      start_time: {
        allowNull:false,
        type: Sequelize.TIME
      },
      end_time: {
        allowNull:false,
        type: Sequelize.TIME
      },
      userId:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model:{
            tableName : "Users"
          },
          key : "id"
        },
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
      },
      canchasId:{
        allowNull: false,
        type : Sequelize.INTEGER,
        references : {
          model:{
            tableName : "Canchas"
          },
          key : "id"
        },
        onUpdate: "CASCADE",
        onDelete : "CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservations');
  }
};