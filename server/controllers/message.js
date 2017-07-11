const Messages = require('../models').Messages;

module.exports = {
    // function to create a group with the post method
    create(req, res) {
        return Messages
            .create({
                groupid: req.body.groupid,
                read: req.body.read,
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error));
    },
    // function to return all groups with the get method
    list(req, res) {
        return messages
            .all()
            .then(messages => res.status(200).send(messages))
            .catch(error => res.status(400).send(error));
    },
};