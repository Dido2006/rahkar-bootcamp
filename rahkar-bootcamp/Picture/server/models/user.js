const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/database") ;

const User = sequelize.define('User', {
  // Model attributes are defined here
  id: {
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  mobile:{
    type:DataTypes.STRING,
    allowNull:false
  }
}, {
  timestamps:true
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
module.exports = User;
