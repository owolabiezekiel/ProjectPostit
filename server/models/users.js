'use strict';
module.exports = function(sequelize, DataTypes) {
    let Users = sequelize.define('Users', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        phonenumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        classMethods: {
            // associations can be defined here
            associate: (models) => {
                Users.hasMany(models.Groups, {

                    as: 'userGroup',
                });
            },
        }
    });
    return Users;
};