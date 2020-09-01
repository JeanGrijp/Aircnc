const express = require('express')
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const ProfileController = require('./controllers/ProfileController')
const multer = require('multer')
const uploadsConfig = require('./config/upload')

const routes = express.Router()
const upload = multer(uploadsConfig)

routes.post('/sessions', SessionController.store)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)
routes.get('/spots', SpotController.index)
routes.get('/profile', ProfileController.show)

module.exports = routes