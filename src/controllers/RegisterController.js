const express = require('express')
const session = require('express-session')
const {authenticator} = require('otplib')
const QRCode = require('qrcode')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const User = require("../models/User");
const {mod} = require("qrcode/lib/core/polynomial");
const path = require("path");
const app = express()

session({
    secret: 'supersecret',
    resave: true,
    saveUninitialized: true,

})

class RegisterController {
    get(req, res) {
        res.render('register.ejs', {error: " "})

        // return res.sendFile(path.join(__dirname, '../../view/register.html'))
    }

    async post(req, res) {
        try {
            const email = req.body.email, password = req.body.password

            const validUser = await User.findOne({email}).lean();

            if (validUser) {
                return res.render("register.ejs", {error: "User already exists!"})
            }
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(password, salt)

            const user = await new User({
                email: email,
                password: hashed,
                secret: authenticator.generateSecret()
            });
            user.save().then(() => {
                // res.json('Successful Registration')
                QRCode.toDataURL(authenticator.keyuri(email, 'KriptoExchange', secret), (err, url) => {
                    if (err) {
                        throw err
                    } else if (req.session.email === !email) {
                        return res.render('login.ejs', {error: " "})
                    } else {
                        req.session.qr = url
                        req.session.email = email
                        res.redirect('/tfa')
                    }
                })
                return res.redirect('/login');
            })
        } catch (err) {
            res.send(err)
        }
    }
}

module.exports = new RegisterController()