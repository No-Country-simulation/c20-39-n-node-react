'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
   
    static associate(models) {
     Rol.associate = (models)=>{
      Rol.hasMany(models.User,{
        as : "rols",
        foreignKey : "rolId"
      })
     }
    }
  }
  Rol.init({
    rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rol',
  });
  return Rol;
};