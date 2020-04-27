const mongoose = require('mongoose');

const guarantorSchema = mongoose.Schema({
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
    debtor_id:{
        type: String,
        required:true
    },
	created_at:{
		type: Date,
		default: Date.now
	}
});

/* Initalize the module Guarantor with the shema guarantorSchema */
/* Same as create Table guarantor using guarantor.sql*/
const Guarantor = module.exports = mongoose.model('Guarantor', guarantorSchema);

/* Below are Methods we can create. */
/* Methods are kinda like stored procedures */


// Get all Guarantors of a debtor
module.exports.getGuarantors = (id, limit,callback) => {
	Guarantor.find({debtor_id:id},callback).limit(limit);
}

// Get Guarantor
module.exports.getGuarantorById = (id, callback) => {
	Guarantor.findById(id, callback);
}

// Add Guarantor
module.exports.addGuarantor = (guarantor, callback) => {
	Guarantor.create(guarantor, callback);
}

// Update Guarantor
module.exports.updateGuarantor = (id, guarantor, options, callback) => {
	var query = {_id: id};
	var update = {
        name: guarantor.name,
        address: guarantor.address,
        phone: guarantor.phone,
        email: guarantor.email,
        gender: guarantor.gender,
        age: guarantor.age,
        debtor_id: guarantor.debtor_id,
	}
	Guarantor.findOneAndUpdate(query, update, options, callback);
}

// Delete Guarantor
module.exports.removeGuarantor = (id, callback) => {
	var query = {_id: id};
	Guarantor.remove(query, callback);
}