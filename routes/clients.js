var express = require('express');
var clientsRoute = express.Router();

//Middle ware that is specific to this router
clientsRoute.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

Clients = require('../models/clientsModel');

// Get all clients
clientsRoute.get('/', (req, res) => {
	Clients.getClients((err, clients) => {
		if (err) {
			res.json({
				error: 400,
				message: "Not found"
			})
		}
		res.json(clients);
	});
});

// Get a clients by id
clientsRoute.get('/:clientsId', (req, res) => {
	Clients.getClientsById(req.params.clientsId,(err, clients) => {
		if (err) {
			res.json({
				error: 400,
				message: "Not found"
			})
		}
		res.json(clients);
	});
});

clientsRoute.get('/', (req, res) => {
	
});

clientsRoute.get('/', (req, res) => {
	
});


module.exports = clientsRoute;