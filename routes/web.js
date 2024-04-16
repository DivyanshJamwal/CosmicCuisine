const homeCtrl = require('../app/http/controllers/homeCtrl')
const authCtrl = require('../app/http/controllers/authCtrl')
const cartCtrl = require('../app/http/controllers/customers/cartCtrl')

function initRoutes(app){

    app.get('/', homeCtrl().index)
    app.get('/login', authCtrl().login)
    app.get('/register', authCtrl().register)
    app.get('/cart', cartCtrl().index)
    app.post('/update-cart', cartCtrl().update)
    
}

module.exports = initRoutes