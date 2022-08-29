const path = require('path')

class RePass_Controller {
    show(req, res) {
        return res.render('repass.ejs')
    }
}

module.exports = new RePass_Controller()