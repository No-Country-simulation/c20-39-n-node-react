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
<<<<<<< HEAD
    rolId : {
      type: DataTypes.INTEGER,
      defaultValue: 1
    } 
=======
    rolId : DataTypes.INTEGER,
    resenasId: DataTypes.INTEGER
>>>>>>> feature/elias
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};