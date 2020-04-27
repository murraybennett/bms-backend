var express = require('express');
var usersRoute = express.Router();

//Middle ware that is specific to this router
usersRoute.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

User = require('../models/userModel');

// Get all users
usersRoute.get('/', (req, res) => {
	User.getUsers((err, users) => {
		if (err) {
			res.json({
				error: 400,
				message: "Not found"
			})
		}
		res.json(users);
	});
});

// Get a user by id
usersRoute.get('/:userId', (req, res) => {
	User.getUserById(req.params.userId,(err, user) => {
		if (err) {
			res.json({
				error: 400,
				message: "Not found"
			})
		}
		res.json(user);
	});
});

usersRoute.get('/register', (req, res) => {
	let user = new User(req.body)
	user.save((err)=>{
		if(err){
			res.json("there was an error processing your request")
			console.log("error saving user :",err)
		}else{
			res.json("account created succesfully")
			console.log("stored user in db")
		}
	})
});

usersRoute.get('/', (req, res) => {
	
});


module.exports = usersRoute;