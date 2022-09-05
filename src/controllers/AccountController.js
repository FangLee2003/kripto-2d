const path = require('path')
const express = require('express')
const app = express()
const User = require('../models/User')

/** controller get home page */
class AccountController {
    async get(req, res) {
        const email = req.session.email
        const user = await User.findOne({email}).lean();
        res.render('account.ejs', {email: user.email, name: user.name, phone: user.phone, country: user.country})
    }
}

module.exports = new AccountController()

