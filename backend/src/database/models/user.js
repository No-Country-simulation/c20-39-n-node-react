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
      User.hasOne(models.Rol,{
        as: "rols",
        foreignKey : "rolId"
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rolId : DataTypes.INTEGER,
    resenasId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};