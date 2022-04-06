const express = require ('express');
const Usercontroller = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');

const routes = express.Router();

routes.post('/users', Usercontroller.store);
routes.get('/users',Usercontroller.index);
routes.post('/users/:user_id/addresses', AddressController.store);
routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.get('/users/:user_id/techs', TechController.index);
routes.delete('/users/:user_id/techs', TechController.delete);


module.exports = routes; 
