const express = require ('express');
const Usercontroller = require('./controllers/UserController');

const routes = express.Router();

routes.post('/users', Usercontroller.store);


module.exports = routes; 
