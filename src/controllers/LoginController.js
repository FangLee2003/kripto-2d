const path = require('path')
const {authenticator} = require("otplib");
const jwt = require("jsonwebtoken");
const express = require('express')
const bcrypt = require('bcrypt')
const app = express()
const User = require('../models/User')
const verifyTFA = require('../middleware/verifyTFA')

// const sessionMiddleware = require('../../middleware/mdw')
// const jwtMiddleware = require('../../middleware/mdw')
// const QRCode = require("qrcode");
const session = require("express-session");
const expressJWT = require("express-jwt");
const QRCode = require("qrcode");

const jwtMiddleware = expressJWT({
    secret: 'supersecret',
    algorithms: ['HS256'],
    getToken: (req) => {
        return req.session.token
    }
})

class LoginController {
    get(req, res) {
        // return res.sendFile(path.join(__dirname, '../../view/login.html'))
        res.render('login.ejs', {error: " "})
    }

    async post(req, res) {
        try {
            const email = req.body.email,
                password = req.body.password,
                code = req.body.code

            //load user by email
            const validUser = await User.findOne({email}).lean();
            if (!validUser) {
                return res.render('login.ejs', {error: "Wrong email or password!"})
            }
            const validPassword = await bcrypt.compare(password, validUser.password)
            if (!validPassword) {
                return res.render('login.ejs', {error: "Wrong email or password!"})
            }
            if (validUser && validPassword) {
                verifyTFA.verify(req, res, email, code)
            }
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new LoginController()