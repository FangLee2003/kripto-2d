const HomeController = require('../app/controllers/HomeController')
const MarketcapController = require('../app/controllers/MarketcapController')
const NewsController = require('../app/controllers/NewsController')
const AccountController = require('../app/controllers/AccountController')
const LoginController = require('../app/controllers/LoginController')
const RegisterController = require('../app/controllers/RegisterController')
const RePass_Controller = require('../app/controllers/RePass_Controller')

const {urlencoded} = require('body-parser');
const express = require("express");

const router = express.Router()

function route(app) {
    router.get('/', HomeController.get)
    router.get('/marketcap', MarketcapController.get)
    router.get('/news', NewsController.get)
    router.get('/account', AccountController.get)

    router.get('/login', LoginController.get)
    router.post('/login', LoginController.post)

    router.get('/register', RegisterController.get)
    router.post('/register', RegisterController.post)
    router.get('/register-tfa', RegisterController.get2fa)
    // router.post('/signup-2fa', RegisterController.post2fa)

    router.get('/recover-password', RePass_Controller.show)

    return app.use('/', router)

}

module.exports = route;