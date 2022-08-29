const path = require('path')


/** controller get home page */
class AccPage {
    show(req, res) {
        // return res.sendFile(path.join(__dirname, '../../view/account.html'))

        res.render('account.ejs')

    }
}

module.exports = new AccPage()

