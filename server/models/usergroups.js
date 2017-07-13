'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserGroups = sequelize.define('UserGroups', {
        userId: DataTypes.INTEGER,
        groupId: DataTypes.INTEGER
    }, {
        classMethods: {
            associate(models) {
                // associations can be defined here
            }
        }
    });
    return UserGroups;
};