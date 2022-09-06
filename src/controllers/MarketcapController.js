const path = require('path')

/** controller get home page */
class MarketcapController {
    get(req, res) {
        res.render('marketcap.ejs')
    }
}
module.exports = new MarketcapController()