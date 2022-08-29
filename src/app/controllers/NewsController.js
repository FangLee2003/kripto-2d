const path = require('path')

/** controller get home page */
class NewsController {
    get(req, res) {
        return res.render('news.ejs')
    }
}

module.exports = new NewsController()


