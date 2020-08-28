require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTSTRING)
    .then( () => {
        console.log('Connected to DB')
        app.emit('ok')
    }).catch(e => {
        console.log(e)
    })
const session = require('express-session')
const mongooseStore = require('connect-mongo')(session)
const flash = require('connect-flash')

app.use(csrf())

const routes = require('./routes')
const path = require('path')
const helmet = require('helmet')
const csrf = require('csurf')


app.use(helmet())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.resolve(__dirname, "public")))

const sessionOptions = session({
    secret: "ssidjaiosjdioasjdiojasiodjasoidjjsdnzxlvn xkovniodsn 2131243242304u2389757892365862734hvu8herfeu8hfy89erbyw70byt89w3478h9f0",
    store: mongooseStore({mongooseConnection: mongoose.connection}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(flash())

app.on('ok', () => {
    app.listen(3000, () => {
        console.log('http://localhost:3000')
        console.log('servidor executando na porta 3000')
    })
})