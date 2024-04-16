const Menu = require('../../models/menu')
function homeCtrl() {
    return {
        async index(req, res) {
            const items = await Menu.find()
            return res.render('home',{items: items})
        }
    }
}

module.exports = homeCtrl