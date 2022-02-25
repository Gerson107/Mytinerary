const Router = require('express').Router()

const ciudadesController = require('../controllers/ciudadesController')

const {getCities} = ciudadesController

Router.route('/allcities')
.get(getCities)

module.exports = Router