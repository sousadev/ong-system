const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/ongController');
const incidentsController = require('./controllers/incidentsController');
const profileController = require('./controllers/profileController');


routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create)

routes.get('/cases', incidentsController.index)
routes.post('/cases', incidentsController.create)
routes.delete('/cases/:id', incidentsController.delete)

routes.get('/profile', profileController.index);

module.exports = routes;