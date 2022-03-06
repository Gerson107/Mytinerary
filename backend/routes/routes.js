const Router = require('express').Router()

const ciudadesController = require('../controllers/ciudadesController')

const {getCities, getOneCity, createCities,  deleteCities,  updateCities} = ciudadesController

Router.route('/allcities')
.get(getCities)
.post(createCities)

Router.route('/allcities/:id')
.delete(deleteCities)
.put(updateCities)
.get(getOneCity)
module.exports = Router