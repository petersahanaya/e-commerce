const Sequelize = require('sequelize')

const sequel = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host : process.env.HOST,
    post : process.env.DB_PORT,
    dialect : "mysql"
})

const User = sequel.define('users', {
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
        type : Sequelize.DataTypes.TEXT
    }
});

module.exports = { User, sequel }