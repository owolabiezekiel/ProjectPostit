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
                    isAlspanumeric: {
                        args: true,
                        msg: 'Username can only contain alphanumeric characters',
                    },
                },
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
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
            },
            phonenumber: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    args: [6, 15],
                    msg: 'Please supply a phone number in the range of 10 - 20 characters',
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