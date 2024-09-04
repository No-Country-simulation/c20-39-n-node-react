'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
   
    static associate(models) {
      Image.associate = (models)=>{
        Image.belongsTo(models.User,{
          as : "images",
          foreignKey : "userId"
        })
    }
  }
  }
  Image.init({
    userProfile: DataTypes.STRING,
    userId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};