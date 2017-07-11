const Users = require('../models').Users;

module.exports = {
    create(req, res) {
        return Users
            .create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                phonenumber: req.body.phonenumber
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Users
            .all()
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error));
    },
};