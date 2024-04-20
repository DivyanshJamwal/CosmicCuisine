
function authCtrl() {
    return {
        async login(req, res) {
            res.render('auth/login')
        },
        async register(req, res) {
            res.render('auth/register')
        },
        async postRegister(req, res) {
            const { name, email, password }   = req.body
        }
    }
}

module.exports = authCtrl