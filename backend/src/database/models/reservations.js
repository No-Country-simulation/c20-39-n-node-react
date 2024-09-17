'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservations extends Model {
    
    static associate(models) {
      Reservations.belongsTo(models.User,{
        as : "reservas",
        foreignKey : "userId"
      }),
      Reservations.hasOne(models.Cancha,{
        as : "canchas",
        foreignKey : "canchasId"
      })
    }
  }
  Reservations.init({
    reservation_date: DataTypes.DATE,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    userId : DataTypes.INTEGER,
    canchasId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reservations',
  });
  return Reservations;
};