const path = require('path')


/** controller get home page */
class HomeController {
    get(req, res) {
        res.render('home.ejs')
    }
}

module.exports = new HomeController()

