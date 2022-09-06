const User = require("../models/User");
const {authenticator} = require("otplib");
const jwt = require('jsonwebtoken')

async function verify(req, res, email, code) {
    try {
        const validUser = await User.findOne({email}).lean()
        console.log(validUser, code, validUser.secret)

        if (!validUser || !authenticator.check(code, validUser.secret)) {
            //redirect back
            return res.redirect("/3d/login")
        }

        //correct, add jwt to session
        req.session.qr = null
        req.session.email = null
        req.session.token = jwt.sign(email, 'supersecret')

        return res.redirect('/3d/account')
    } catch (err) {
        console.log(err)
        res.redirect('/3d/login')
    }
}

module.exports = {verify}