// this is the file that handles all routes
const usersController = require('../controllers').user;
const groupsController = require('../controllers').group;
const messageController = require('../controllers').message;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
    }));

    app.post('/api/user', usersController.create);
    app.get('/api/user', usersController.list);
    app.post('/api/group', groupsController.create);
    app.post('/api/messages', messageController.create);
};