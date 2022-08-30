const path = require('path')


/** controller get home page */
class HomeController {
    get(req, res) {
        res.render('marketcap.ejs')
    }
}
module.exports = new HomeController()

