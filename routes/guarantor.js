var express = require('express');
var guarantorRoute = express.Router();

//Middle ware that is specific to this router
guarantorRoute.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

Guarantor = require('../models/guarantorModel');

// Get all guarantor
guarantorRoute.get('/', (req, res) => {
	Guarantor.getGuarantors((err, guarantor) => {
		if (err) {
			res.json({
				error: 400,
				message: "Not found"
			})
		}
		res.json(guarantor);
	});
});

// Get a guarantor by id
guarantorRoute.get('/:guarantorId', (req, res) => {
	Guarantor.getGuarantorById(req.params.guarantorId,(err, guarantor) => {
		if (err) {
			res.json({
				error: 400,
				message: "Not found"
			})
		}
		res.json(guarantor);
	});
});

guarantorRoute.get('/', (req, res) => {
	
});

guarantorRoute.get('/', (req, res) => {
	
});


module.exports = guarantorRoute;