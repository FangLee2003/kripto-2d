const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
    email: {type: String, required: true, maxlength: 255,},
    password: {type: String, required: true, maxlength: 255},
    secret: {type: String, required: true},

}, {
    timestamps: true,
    // collection: 'users',
})

module.exports = mongoose.model('users', User)
