const path = require("path")
const QRCode = require("qrcode");
const {authenticator} = require("otplib");
// const RegisterController = require('./RegisterController')
// const session = require("express-session");

// const sessionMiddleware = session({
//     secret: 'supersecret',
// })

class TFAController {
    // GET
    get(req, res) {
        if (!req.session.qr) {
            return res.redirect('/login')
        }
        return res.render('tfa.ejs', {qr: req.session.qr})
    }
}

module.exports = new TFAController();

