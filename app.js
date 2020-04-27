const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const {
	auth
} = require('express-openid-connect');
const connectDB = require('./connection');

const config = {
	required: false,
	auth0Logout: true,
	appSession: {
		secret: 'a long, randomly-generated string stored in env'
	},
	baseURL: 'http://localhost:5000',
	clientID: 'iH44bIowcgObCyA7yRqBBs3admSWGTO6',
	issuerBaseURL: 'https://dev-bms-auth.auth0.com'
};

connectDB();
dotenv.config();
app.use(auth(config));
app.use(bodyParser.json())

User = require('./models/userModel.js');

var usersRoute = require('./routes/users');
var guarantorRoute = require('./routes/guarantor');
var paymentRoute = require('./routes/payment');
var clientsRoute = require('./routes/clients');


/*API Routes*/
app.use('/api/users', usersRoute);
app.use('/api/guarantor', guarantorRoute);
app.use('/api/payment', paymentRoute);
app.use('/api/clients', clientsRoute);

app.get('/api/', (res) => {
	res.json(`api for ${process.env.NAME}`);
});

app.get('/', (req, res) => {
	res.send(req.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.listen(process.env.PORT);
console.log(`${process.env.NAME} running on port ${process.env.PORT}`);