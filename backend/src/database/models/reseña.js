'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reseña extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.associate = (models)=>{
        User.belongsTo(models.User,{
          as : "rols",
          foreignKey : "rolId"
        })
       }
    }
  }
  Reseña.init({
    rolId: DataTypes.INTEGER,
    cancha_id: DataTypes.INTEGER,
    reseña: DataTypes.STRING,
    estrella: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reseña',
  });
  return Reseña;
};