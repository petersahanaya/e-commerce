const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host : process.env.HOST,
  dialect : "mysql"
});

 const User = sequelize.define('Users', {
      username : {
          type : Sequelize.DataTypes.STRING,
          allowNull : false
      },
      email : {
          type : Sequelize.DataTypes.STRING,
          allowNull : false
      },
      password : {
          type : Sequelize.DataTypes.STRING,
          allowNull : false
      },
      token : {
          type : Sequelize.DataTypes.TEXT('medium')
      },
      profile : {
          type : Sequelize.DataTypes.TEXT('long'),
      }
  });   



  module.exports = { User,  sequelize }
