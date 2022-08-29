const path = require('path')
const {authenticator} = require("otplib");
const jwt = require("jsonwebtoken");
const express = require('express')
const User = require('../models/User')


const app = express()

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

function verifyLogin(email, password, code, req, res, failUrl, err) {

    //load user by email
    email = req.body.email
    User.find({email}, {"secret": 1, "password": 0, "email": 0, _id: 0},function (data, err){
        if (err) {
            throw err
        }
            if (!data) {
                return res.redirect('/loi')
            }

            if (!authenticator.check(code, data.secret)) {
                //redirect back
                return res.redirect(failUrl)
            }

            //correct, add jwt to session
            req.session.qr = null
            req.session.email = null
            req.session.token = jwt.sign(email, 'supersecret')

            //redirect to "private" page
            return res.redirect('/private')
        })


}


/** controller get home page */
class LoginPage {

    get(req, res) {
        // return res.sendFile(path.join(__dirname, '../../view/login.html'))
        res.render('login.ejs')

    }

    post(req, res, next, err) {

        const email = req.body.email,
            password = req.body.password,
            code = req.body.code

        //load user by email
        const userLogin = User.findOne({email}).lean();
        const passLogin = User.findOne({password}).lean();

        if (!userLogin || !passLogin) {
            return res.status(200).json({
              err:"loi"
            })
        }
        else{
            res.status(500).json({err: 'loi server'})
        }


    }
}

module.exports = new LoginPage()

// exports = {verifyLogin}

