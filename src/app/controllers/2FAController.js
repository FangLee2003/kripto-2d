const path =require("path")
const QRCode = require("qrcode");
const {authenticator} = require("otplib");
// const RegisterController = require('./RegisterController')
// const session = require("express-session");

// const sessionMiddleware = session({
//     secret: 'supersecret',
// })

class SignUp2faController {
    // GET
    show(req, res) {
        if (!req.session.qr) {
            return res.redirect('/')
        }
        return res.render('signup__2fa.ejs', {qr: req.session.qr})
        // return res.json('ok')
    }
}
    module.exports = new SignUp2faController();

