// this is the file that handles all routes
const usersController = require('../controllers').user;
const groupsController = require('../controllers').group;
const messagesController = require('../controllers').message;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
    }));

    app.post('/api/user/signup', usersController.signup); // to create a new user
    app.get('/api/user/login', usersController.signin); // to return list of users

    app.post('/api/group', groupsController.create); // to create a new group
    app.get('/api/group', groupsController.list); // to return list of groups

    app.post('/api/messages', messagesController.create); // to add new messages to a group message
    app.get('/api/messages', messagesController.list); // to retrieve all messages in a group
};