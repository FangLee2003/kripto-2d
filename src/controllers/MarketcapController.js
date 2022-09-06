const path = require('path')

class MarketcapController {
    get(req, res) {
        res.render('marketcap.ejs')
    }
}

module.exports = new MarketcapController()
