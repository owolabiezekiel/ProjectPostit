const User = require('../models').Users;
const jwt = require('jsonwebtoken');

module.exports = {
    signup(req, res) {
        return User
            .create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                phonenumber: req.body.phonenumber,
            })
            .then((user) => {
                const token = jwt.sign({
                    userId: user.id
                }, 'Abracadabra', {
                    expiresIn: '24h' // expires in 24 hours
                });

                // Return the information including token as JSON Value
                res.json({
                    success: true,
                    message: 'Token Generated. Signup successful!',
                    token,
                });
            })
            .catch(error => res.status(400).send(error));
    },

    signin(req, res) {
        return User
            .findOne({
                where: {
                    username: req.body.username
                }
            }).then((user) => {
                if (!user) {
                    res.status(404).send({ msg: 'User not found' });
                }

                if (user.password == req.body.password) {
                    const token = jwt.sign({
                        userId: user.id
                    }, 'Abracadabra', {
                        expiresIn: '24h' // expires in 24 hours
                    });

                    // Return the information including token as JSON Value
                    res.json({
                        success: true,
                        message: 'Token Generated. Signin successful!',
                        token,
                    });
                } else {
                    res.status(404).send({ msg: 'Password is incorrect' });
                }
            });
    }
};