const path = require('path')


/** controller get home page */
class HomePage {
    show(req, res) {
        // return res.sendFile(path.join(__dirname, '../../view/index.html'))
        res.render('index.ejs')

    }
}
//
module.exports = new HomePage()

