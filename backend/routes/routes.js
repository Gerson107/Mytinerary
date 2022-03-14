const Router = require('express').Router()

const { getitinerios, getOneItinerario, deleteItinerarios, updateItinerarios, createItinerarios } = require('../controllers/itinerariosControllers')
const {getCities, getOneCity, createCities,  deleteCities,  updateCities} = require('../controllers/ciudadesController')
const {signUpUsers, signInUser, signOutUser} = require('../controllers/userControllers')

Router.route('/auth/signUp')
.post(signUpUsers)

Router.route('/auth/signIn')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)

Router.route('/allitinerarios')
.get(getitinerios)
.post(createItinerarios)

Router.route('/allitinerarios/:id')
.delete(deleteItinerarios)
.put(updateItinerarios)
.get(getOneItinerario)

Router.route('/allcities')
.get(getCities)
.post(createCities)

Router.route('/allcities/:id')
.delete(deleteCities)
.put(updateCities)
.get(getOneCity)


module.exports = Router