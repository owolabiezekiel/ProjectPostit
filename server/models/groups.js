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
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                Groups.belongsTo(Users);
            }
        }
    });
    return Groups;
};