const express = require('express')
const session = require('express-session')
const {authenticator} = require('otplib')
const QRCode = require('qrcode')
const bodyParser = require('body-parser')
const User = require("../../app/models/User");
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
        res.render('register.ejs')

        // return res.sendFile(path.join(__dirname, '../../view/register.html'))
    }

    post(req, res) {
        const email = req.body.email;
        const password = req.body.password;
        const secret = authenticator.generateSecret();

        const user = new User(
            {
                email: email,
                password: password,
                secret: secret
            });

        user
            .save()
            .then(() => {
                // res.json('Successful Registration')
                QRCode.toDataURL(authenticator.keyuri(email, 'KriptoExchange', secret), (err, url) => {
                    if (err) {
                        throw err
                    } else {
                        req.session.qr = url
                        req.session.email = email
                        res.redirect('/register-tfa')
                    }
                })
            })
            .catch(err=> {
                return res.json(err)
            });

    }

    get2fa(req, res) {
        if (!req.session.qr) {
            return res.redirect('/error_page')
        }
        return res.render('tfa.ejs', {qr: req.session.qr})
    }
}

module.exports = new RegisterController()