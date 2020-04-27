const mongoose = require('mongoose');

/*
User Schema :

Think of the schema as the sql for creating a table
Models are the same as tables in sql in a sense 
*/
const debtorSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
    },
    address:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
	email:{
		type: String,
		required: true
    },
    gender:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
	created_at:{
		type: Date,
		default: Date.now
	}
});
