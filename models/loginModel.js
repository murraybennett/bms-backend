const mongoose = require('mongoose');

/*
User Schema :

Think of the schema as the sql for creating a table
Models are the same as tables in sql in a sense 
*/
const loginSchema = mongoose.Schema({
	password:{
		type: String,
		required: true
    },
	created_at:{
		type: Date,
		default: Date.now
	}
});
