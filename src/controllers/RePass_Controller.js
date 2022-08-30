const path = require('path')

class RePass_Controller {
    get(req, res) {
        return res.render('repass.ejs')
    }
}

module.exports = new RePass_Controller()