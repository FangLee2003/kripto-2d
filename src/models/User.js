const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
    email: {type: String, required: true, maxlength: 255, unique: true},
    password: {type: String, required: true, maxlength: 255},
    secret: {type: String, required: true},
    admin: {type: Boolean, default: false},
    name: {type: String},
    phone: {type: String},
    city: {type: String},
    country: {type: String}
}, {
    timestamps: true,
    // collection: 'users',
})

module.exports = mongoose.model('users', User)
