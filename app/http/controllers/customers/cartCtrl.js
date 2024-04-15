function cartCtrl() {
    return {
        async index(req, res) {
            res.render('customers/cart')
        }
    }
}

module.exports = cartCtrl