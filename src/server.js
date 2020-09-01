require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes')
const path = require('path')

mongoose.connect(process.env.CONNECTSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
        console.log('Connected to DB')
        app.emit('ok')
    }).catch(e => {
        console.log(e)
})

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.resolve(__dirname, "public")))
app.on('ok', () => {
    app.listen(3000, () => {
        console.log('http://localhost:3000')
        console.log('servidor executando na porta 3000')
    })
})