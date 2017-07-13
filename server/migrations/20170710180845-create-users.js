'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    len: {
                        args: [6, 15],
                        msg: 'Please supply a username in the range of 6 - 15 characters'
                    },
                    isAlphanumeric: {
                        args: true,
                        msg: 'Username can only contain alphanumeric characters',
                    },
                },
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: {
                        args: true,
                        msg: 'This email address is invalid'
                    }
                }
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    len: {
                        args: [6, 15],
                        msg: 'Please supply a password in the range of 6 - 15 characters',
                    }
                },
            },
            phonenumber: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    args: [6, 15],
                    msg: 'Please supply a phone number in the range of 10 - 20 characters',
                },
                isNumeric: {
                    args: true,
                    msg: "Phone number can only be Numeric characters",
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('Users');
    }
};