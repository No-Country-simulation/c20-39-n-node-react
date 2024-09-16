'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Alquiler extends Model {
    static associate(models) {
      Alquiler.belongsTo(models.User, { foreignKey: 'userId', as: 'usuario' });
      Alquiler.belongsTo(models.Cancha, { foreignKey: 'canchaId', as: 'cancha' });
    }
  }

  Alquiler.init({
    userId: DataTypes.INTEGER,
    canchaId: DataTypes.INTEGER,
    horarioInicio: DataTypes.DATE,
    horarioFin: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Alquiler',
  });
  
  return Alquiler;
};
