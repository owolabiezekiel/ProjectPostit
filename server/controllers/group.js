const Groups = require('../models').Groups;

module.exports = {
    // function to create a group with the post method
    create(req, res) {
        return Groups
            .create({
                groupname: req.body.groupname,
                groupcreator: req.body.groupcreator,
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error));
    },
    // function to return all groups with the get method
    list(req, res) {
        return Groups
            .all()
            .then(groups => res.status(200).send(groups))
            .catch(error => res.status(400).send(error));
    },
};