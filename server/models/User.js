module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        username : {
            type : DataTypes.STRING,
            allowNull : false
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false
        },
        token : {
            type : DataTypes.TEXT('medium')
        }
    });   

    return User
}