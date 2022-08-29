const path = require('path')


/** controller get home page */
class RePassPage {
    show(req, res) {
        return res.sendFile(path.join(__dirname, '../../view/recover-password.html'))
    }
}
//
module.exports = new RePassPage()

