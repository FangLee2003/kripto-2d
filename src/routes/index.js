const HomeController = require('../controllers/HomeController')
const MarketcapController = require('../controllers/MarketcapController')
const NewsController = require('../controllers/NewsController')
const AccountController = require('../controllers/AccountController')
const RegisterController = require('../controllers/RegisterController')
const LoginController = require('../controllers/LoginController')
const TFAController = require('../controllers/TFAController')
const RePass_Controller = require('../controllers/RepassController')

const {urlencoded} = require('body-parser');
const express = require("express");

const router = express.Router()

function route(app) {
    router.get('/', HomeController.get)
    router.get('/marketcap', MarketcapController.get)
    router.get('/news', NewsController.get)
    router.get('/account', AccountController.get)

    router.get('/register', RegisterController.get)
    router.post('/register', RegisterController.post)

    router.get('/login', LoginController.get)
    router.post('/login', LoginController.post)

    router.get('/tfa', TFAController.get)
    router.post('/tfa', TFAController.post)

    router.get('/repass', RePass_Controller.get)
    router.post('/repass', RePass_Controller.post)

    return app.use('/', router)
}

module.exports = route;