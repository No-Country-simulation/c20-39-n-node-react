'use strict';
const rolJson = require('../../data/rol.json')

const rol = rolJson.map(({rol})=>{
  return {
    rol,
    createdAt : new Date(),
    updatedAt : new Date()
  }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rols',rol,{})
   
     
    
  },

  async down (queryInterface, Sequelize) {
   
  }
};
