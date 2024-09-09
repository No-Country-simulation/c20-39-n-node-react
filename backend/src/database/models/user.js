'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
      User.hasOne(models.Image,{
        as: "images",
        foreignKey : "userId"
      }),
      User.belongsTo(models.Rol,{
        as: "rols",
        foreignKey : "rolId"
      }),
      User.belongsTo(models.Reservations,{
        as: "reservas",
        foreignKey : "userId"
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rolId : {
      type: DataTypes.INTEGER,
      defaultValue: 1
    } 
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};