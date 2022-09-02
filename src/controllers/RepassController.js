const path = require('path')

class RepassController {
    get(req, res) {
        return res.render('repass.ejs')
    }
    post(req, res){

    }
}

module.exports = new RepassController()