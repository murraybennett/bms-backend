const mongoose = require('mongoose');

/*
User Schema :

Think of the schema as the sql for creating a table
Models are the same as tables in sql in a sense 
*/

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    user_type: {
        type: String,
        required: true
        // client or bearer or officer.
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

/* Initalize the module User with the shema userSchema */
/* Same as create Table user using user.sql*/
const User = module.exports = mongoose.model('User', userSchema);

/* Below are Methods we can create. */
/* Methods are kinda like stored procedures */


// Get all Users 
module.exports.getUsers = (callback, limit) => {
    User.find(callback).limit(limit);
}

// Get User
module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
}

// Add User
module.exports.addUser = (user, callback) => {
    User.create(user, callback);
}

// Update User
module.exports.updateUser = (id, User, options, callback) => {
    var query = {
        _id: id
    };
    var update = {
        name: User.name,
        email: User.email
    }
    User.findOneAndUpdate(query, update, options, callback);
}

// Delete User
module.exports.removeUser = (id, callback) => {
    var query = {
        _id: id
    };
    User.remove(query, callback);
}