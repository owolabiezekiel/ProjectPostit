const Messages = require('../models').Messages;

module.exports = {
    create(req, res) {
        return Messages
            .create({
                groupid: req.body.groupid,
                read: req.body.read,
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error));
    },
};