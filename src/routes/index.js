const HomePage = require('../app/controllers/HomeController')
const newsPage = require('../app/controllers/NewsController')
const AccPage = require('../app/controllers/AccountController')
const LoginPage = require('../app/controllers/LoginController')
// const SignUp2faRouter = require('./SignUp-2fa-Routes')
// const SignUp = require('./signup')
const RePassPage = require('../app/controllers/RePass_Controller')
// const registerRouter = require('./registerRouter')
const RegisterController = require('../app/controllers/RegisterController')

const { urlencoded } = require('body-parser');
const express = require("express");

const router = express.Router()

function route(app) {

    router.get('/news', newsPage.show)
    router.get('/account', AccPage.show)

    router.post('/login', LoginPage.post)

    router.get('/login', LoginPage.get)

    // app.use('/register', registerRouter)
    router.get('/register', RegisterController.showRe)

    router.post('/sign--up', RegisterController.postRe)
    router.get('/signup-2fa', RegisterController.get2fa)
    // router.post('/signup-2fa', RegisterController.post2fa)

    router.get('/recover-password', RePassPage.show)
    // router.get('/signup-2fa', SignUp2faRouter)
    // router.get('/signup', SignUp)
    router.get('/',HomePage.show)

    return app.use('/', router)

}

module.exports = route;