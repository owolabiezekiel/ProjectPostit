'use strict';
module.exports = function(sequelize, DataTypes) {
    let Users = sequelize.define('Users', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    args: [6, 15],
                    msg: 'Please supply a username in the range of 6 - 15 characters'
                },
                isAlspanumeric: {
                    args: true,
                    msg: 'Username can only contain alphanumeric characters',
                },
            },
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
            validate: {
                len: {
                    args: [6, 15],
                    msg: 'Please supply a password in the range of 6 - 15 characters',
                },
                isNumeric: {
                    args: true,
                    msg: "Message can only be Numeric characters",
                },
            },
            isAlspanumeric: {
                args: true,
                msg: 'Password can only contain alphanumeric characters',
            },
        },
        phonenumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                args: [6, 15],
                msg: 'Please supply a phone number in the range of 10 - 20 characters',
            },
        },
    }, {

        classMethods: {
            // associations can be defined here
            associate: (models) => {
                Users.belongsToMany(models.Groups, {
                    through: 'UserGroups',
                });
            },
        }
    });
    return Users;
};