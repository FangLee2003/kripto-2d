const path = require('path')


/** controller get home page */
class AccountController {
    get(req, res) {
        res.render('account.ejs')
    }
}

module.exports = new AccountController()

