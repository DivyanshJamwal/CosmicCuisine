const envr = require('dotenv').config()
const express = require('express')
const app = express()
const ejs = require('ejs')
const expresslayout = require('express-ejs-layouts')
const path = require('path')
const exp = require('constants')
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const passport = require('passport')
const MongoDbStore = require('connect-mongodb-session')(session)
const MONGO_CONNECTION_URL = process.env.MONGO_CONNECTION_URL

//Database Connection
mongoose.connect(MONGO_CONNECTION_URL);
const conn = mongoose.connection;
conn.on('error',(error)=>{
    console.log('Connection failed...');
});
conn.once('open', () => {
    console.log('Database connected...');
    
});

// Session store
let mongoStore = new MongoDbStore({
    mongooseConnection: process.env.MONGO_CONNECTION_URL,
    collectionName: 'sessions'
})

// Session config
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    store: mongoStore,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 10 } // 1 min
}))

app.use(flash())

// Passport config
const passportInit = require('./app/config/passport')
passportInit(passport)
app.use(passport.initialize())
app.use(passport.session())

//Assets
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Global middleware
app.use((req, res, next) => {
    res.locals.session = req.session
    res.locals.user = req.user
    next()
})

//Template Engine
app.use(expresslayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

require('./routes/web')(app)

app.listen(PORT , ()=> {
    console.log(`Server running on port ${PORT}`)
})