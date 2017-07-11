'use strict';
module.exports = function(sequelize, DataTypes) {
    var Groups = sequelize.define('Groups', {
        groupname: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        groupcreator: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        messages: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                Groups.belongsToMany(models.Users, {
                    through: 'UserGroups',
                });
                Groups.hasMany(models.Messages, {
                    through: 'UserGroups',
                });
            }
        }
    });
    return Groups;
};