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


/*API Routes*/

app.use('/api/users', usersRoute);

app.get('/api/', (req, res) => {
	res.json(`api service for ${process.env.NAME}`);
});

app.post('/api/register', (req, res) => {
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