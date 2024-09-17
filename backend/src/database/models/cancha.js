'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cancha extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cancha.associate = (models)=>{
        Cancha.hasToMany(models.Reservations,{
          as : "canchas",
          foreignKey : "canchasId"
        })
       }
    }
  }
  Cancha.init({
    rolId: DataTypes.INTEGER,
    reseña_id: DataTypes.INTEGER,
    image_one: DataTypes.STRING,
    image_two: DataTypes.STRING,
    image_three: DataTypes.STRING,
    image_four: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cancha',
  });
  return Cancha;
};