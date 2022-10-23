module.exports = (sequelize, DataTypes, Sequelize) => {
    const Profile = sequelize.define('profile', {
        photo : {
            type : DataTypes.TEXT('long'),
        },
        description : {
            type : DataTypes.STRING,
        },
        status : {
            type : DataTypes.STRING
        }
    })

    return Profile
}