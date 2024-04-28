const homeCtrl = require('../app/http/controllers/homeCtrl')
const authCtrl = require('../app/http/controllers/authCtrl')
const cartCtrl = require('../app/http/controllers/customers/cartCtrl')
const guest = require('../app/http/middleware/guest')

function initRoutes(app){

    app.get('/', homeCtrl().index)
    app.get('/login',guest, authCtrl().login)
    app.post('/login', authCtrl().postLogin)
    app.get('/register', guest, authCtrl().register)
    app.post('/register', authCtrl().postRegister)
    app.get('/cart', cartCtrl().index)
    app.post('/update-cart', cartCtrl().update)
    app.post('/logout', authCtrl().logout)
    
}

module.exports = initRoutes