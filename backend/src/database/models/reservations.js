'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservations extends Model {
    
    static associate(models) {
      Reservations.hasOne(models.User,{
        as : "reservas",
        foreignKey : "userId"
      })
    }
  }
  Reservations.init({
    reservation_date: DataTypes.DATE,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    userId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reservations',
  });
  return Reservations;
};