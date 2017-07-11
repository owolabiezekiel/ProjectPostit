const Groups = require('../models').Groups;

module.exports = {
    create(req, res) {
        return Groups
            .create({
                groupname: req.body.groupname,
                groupcreator: req.body.groupcreator,
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Groups
            .all()
            .then(groups => res.status(200).send(groups))
            .catch(error => res.status(400).send(error));
    },
};