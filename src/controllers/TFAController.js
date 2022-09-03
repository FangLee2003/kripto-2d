const path = require("path")
const QRCode = require("qrcode");
const {authenticator} = require("otplib");
const session = require("express-session");
const User = require('../models/User')

class TFAController {
    // GET
    get(req, res) {
        if (!req.session.qr) {
            return res.redirect('/login')
        }
        return res.render('tfa.ejs', {qr: req.session.qr})
    }

    post(req, res) {
        const email = req.session.email,
            password = req.session.password

        User.find({email}, {"secret": 1, "password": 0, "email": 0, _id: 0}, function (data, err) {
            if (err) {
                throw err
            }
            if (!data || !authenticator.check(password, data.secret)) {
                //redirect back
                return res.render("login.ejs", {error: "Authentication error!"})
            }

            //correct, add jwt to session
            req.session.qr = null
            req.session.email = null
            req.session.token = jwt.sign(email, 'supersecret')

            return res.redirect('/account')
        })
    }
}

module.exports = new TFAController();

