const path = require("path")
const QRCode = require("qrcode");
const {authenticator} = require("otplib");
const session = require("express-session");
const User = require('../models/User')
const verifyTFA = require('../middleware/verifyTFA')

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
            code = req.body.code

        verifyTFA.verify(req, res, email, code)
    }
}

module.exports = new TFAController();

