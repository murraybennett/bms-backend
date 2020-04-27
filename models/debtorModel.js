const mongoose = require('mongoose');

//TODO add stored procedures /methods

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
    client_id:{ // added automatically by the server when created by a client user_type
        type:String, 
        required:true
    },
    bearer_id:{ // can only be assigned by an officer user_type
        type:String,
        required:false
    },
    status:{ // can be changed by a bearer or an officer
        type:String,
        default:"pending"
    },
	created_at:{
		type: Date,
		default: Date.now
	}
});
