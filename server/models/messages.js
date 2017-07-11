'use strict';
module.exports = function(sequelize, DataTypes) {
    var Messages = sequelize.define('Messages', {
        groupid: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        read: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                Messages.belongsTo(Groups, { foreignKey: 'countryCode', targetKey: 'isoCode' });
            }
        }
    });
    return Messages;
};