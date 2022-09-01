const path = require('path')

class RepassController {
    get(req, res) {
        return res.render('repass.ejs')
    }
}

module.exports = new RepassController()