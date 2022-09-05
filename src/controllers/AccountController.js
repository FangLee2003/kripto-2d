const path = require('path')
const express = require('express')
const app = express()
const User = require('../models/User')
const jwt = require("jsonwebtoken");

/** controller get home page */
class AccountController {
    async get(req, res) {
        try {
            const token = jwt.decode('supsersecret')
            const user = await User.findOne({token}).lean();

            if (!user) {
                return res.redirect('/login')
            }

            return res.render('account.ejs', {
                email: user.email,
                name: user.name,
                phone: user.phone,
                country: user.country
            })
        } catch (err) {
            console.log(err)
            res.redirect('/login')
        }
    }
}

module.exports = new AccountController()

