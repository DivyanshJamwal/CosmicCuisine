
function homeCtrl() {
    return {
        async index(req, res) {
            res.render('home')
        }
    }
}

module.exports = homeCtrl