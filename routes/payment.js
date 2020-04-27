var express = require('express');
var paymentRoute = express.Router();

//Middle ware that is specific to this router
paymentRoute.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

Payment = require('../models/paymentModel');

// Get all payment
paymentRoute.get('/', (req, res) => {
	Payment.getPayments((err, payment) => {
		if (err) {
			res.json({
				error: 400,
				message: "Payment Not found"
			})
		}
		res.json(payment);
	});
});

// Get a payment by id
paymentRoute.get('/:paymentId', (req, res) => {
	Payment.getPaymentById(req.params.paymentId,(err, payment) => {
		if (err) {
			res.json({
				error: 400,
				message: "Payment Not found"
			})
		}
		res.json(payment);
	});
});

paymentRoute.post('/', (req, res) => {
	let Payment = new Payment(req.body)
	Payment.save((err)=>{
		if(err){
			res.json("there was an error processing your request")
			console.log("error saving payment :",err)
		}else{
			res.json("payment added succesfully")
			console.log("stored payment in db")
		}
	})
	
});

paymentRoute.get('/', (req, res) => {
	
});


module.exports = paymentRoute;