const Users = require('../models').Users;

module.exports = {
    // function to create a group with the post method
    signup(req, res) {
        return Users
            .create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                phonenumber: req.body.phonenumber
            })
            .then(users => res.status(201).send(users))
            .catch(error => res.status(400).send(error));
    },
    // function to return all groups with the get method
    list(req, res) {
        return Users
            .all()
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error));
    },

    signin(req, res) {
        return Users
            .findOne({
                where: {
                    username: req.body.username,
                    password: req.body.password,
                }
            })
            .then(users => {
                if (users) {
                    res.status(201).send({ success: true, message: "You are already a member" });
                } else {
                    res.status(401).send({ success: false, message: "Username or password could not be verified" });
                }
            })
            .catch(error => res.status(400).send(error));
    }
};