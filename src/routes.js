const express = require ('express');
const Usercontroller = require('./controllers/UserController');
const Address = require('./controllers/AddressController');
const AddressController = require('./controllers/AddressController');

const routes = express.Router();

routes.post('/users', Usercontroller.store);
routes.get('/users',Usercontroller.index);
routes.post('/users/:user_id/addresses', AddressController.store)


module.exports = routes; 
