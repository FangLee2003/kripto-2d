const path = require('path')

/** controller get home page */
class newsPage {
    show(req, res) {
        return res.sendFile(path.join(__dirname,  '../../view/news.html'))
    }
}
//
module.exports = new newsPage()


