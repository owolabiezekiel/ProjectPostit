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
                isAlphanumeric: {
                    args: true,
                    msg: 'Username can only contain alphanumeric characters',
                },
            },
        },
        email: {
            type: DataTypes.STRING,
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
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [6, 15],
                    msg: 'Please supply a password in the range of 6 - 15 characters',
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
                len: {
                    args: [8, 20],
                    msg: 'Please supply a phone number in the range of 8 - 20 characters',
                },
                isNumeric: {
                    args: true,
                    msg: "Phone number can only be Numeric characters",
                },
            },
        },
    }, {

        classMethods: {
            // associations can be defined here
            associate: (models) => {

                User.belongsToMany(models.Group, {
                    through: 'UserGroup',
                    foreignKey: 'userId',
                    constraints: false,
                });
                User.hasMany(models.Message, {
                    foreignKey: 'senderId',
                    as: 'messages',
                });
            },
            instanceMethod: {
                hashPassword() {
                    return bcrypt.hashSync(User.password, bcrypt.genSaltSync(10));
                }
            },
            hooks: {
                beforeCreate(user) {
                    user.password = User.hashPassword();
                }
            }
        }
    });
    return Users;
};