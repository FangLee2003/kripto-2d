const path = require('path')


/** controller get home page */
class HomeController {
    get(req, res) {
        res.render('index.ejs')
    }
}

module.exports = new HomeController()

