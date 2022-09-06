const HomeController = require('../controllers/HomeController')
const MarketcapController = require('../controllers/MarketcapController')
const NewsController = require('../controllers/NewsController')
const AccountController = require('../controllers/AccountController')
const RegisterController = require('../controllers/RegisterController')
const LoginController = require('../controllers/LoginController')
const TFAController = require('../controllers/TFAController')
const RepassController = require('../controllers/RepassController')
const ErrorController = require('../controllers/ErrorController')

const {urlencoded} = require('body-parser');
const express = require("express");

const router = express.Router()

function route(app) {
    app.get('/', ErrorController.get)
    router.get('/', HomeController.get)

    router.get('/marketcap', MarketcapController.get)
    router.get('/news', NewsController.get)

    router.get('/account', AccountController.get)
    router.post('/account', AccountController.post)

    router.get('/register', RegisterController.get)
    router.post('/register', RegisterController.post)

    router.get('/login', LoginController.get)
    router.post('/login', LoginController.post)

    router.get('/tfa', TFAController.get)
    router.post('/tfa', TFAController.post)

    router.get('/repass', RepassController.get)
    router.post('/repass', RepassController.post)

    return app.use('/3d', router)
}

module.exports = route;