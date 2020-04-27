const mongoose = require('mongoose');

/*
Payment Schema :

Think of the schema as the sql for creating a table
Models are the same as tables in sql in a sense 
*/
const paymentSchema = mongoose.Schema({
	amount:{ //can only be made to bearer by officer
		type: Number,
		required: true
    },
    to:{
        type: String,
        required: true
    },
    by:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:false
    },
	created_at:{
		type: Date,
		default: Date.now
	}
});

/* Initalize the module Payment with the shema paymentSchema */
/* Same as create Table payment using payment.sql*/
const Payment = module.exports = mongoose.model('Payment', paymentSchema);

/* Below are Methods we can create. */
/* Methods are kinda like stored procedures */

// Get all Payments 
module.exports.getPayments = (callback, limit) => {
    Payment.find(callback).limit(limit);
}

// Get Payment
module.exports.getPaymentById = (id, callback) => {
    Payment.findById(id, callback);
}

// Add Payment
module.exports.addPayment = (payment, callback) => {
    Payment.create(payment, callback);
}

// Update Payment
module.exports.updatePayment = (id, payment, options, callback) => {
    var query = {
        _id: id
    };
    var update = {
        amount: payment.amount,
        to: payment.to,
        from: payment.from,
        by: payment.by,
        comment: payment.comment,
    }
    Payment.findOneAndUpdate(query, update, options, callback);
}

// Delete Payment
module.exports.removePayment = (id, callback) => {
    var query = {
        _id: id
    };
    Payment.remove(query, callback);
}