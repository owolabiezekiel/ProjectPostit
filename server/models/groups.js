'use strict';
module.exports = (sequelize, DataTypes) => {
    const Groups = sequelize.define('Groups', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'Group name already exists. Use another name'
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                Groups.belongsToMany(models.Users, {
                    through: 'UserGroups',
                    foreignKey: 'groupId',
                    constraints: false,
                });
                Groups.hasMany(models.Messages, {
                    foreignKey: 'groupId'
                });
            }
        }
    });
    return Groups;
};