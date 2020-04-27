const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./connection');

connectDB();
dotenv.config();
app.use(bodyParser.json())

User = require('./models/userModel.js');

var usersRoute = require('./routes/users');
var guarantorRoute = require('./routes/guarantor');


/*API Routes*/
app.use('/api/users', usersRoute);
app.use('/api/users', guarantorRoute);

app.get('/api/', (res) => {
	res.json(`api for ${process.env.NAME}`);
});

/*

model - what this thing does

clients - are the ones who provide the business with debtor information such as name, con

user type on user client,debtor,gurantor


guarantor {
	guarantor:user_id
	guarantee:user_id
}

*/





app.listen(process.env.PORT);
console.log(`${process.env.NAME} running on port ${process.env.PORT}`);