const path = require('path')

/** controller get home page */
class ErrorController {
    get(req, res) {
        res.redirect('/3d')
    }
}

module.exports = new ErrorController()