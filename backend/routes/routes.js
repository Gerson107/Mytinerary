const Router = require('express').Router();
const validator = require('../config/validator');
const passport = require('../config/passport');

const { getitinerios, getOneItinerario, deleteItinerarios, updateItinerarios, createItinerarios } = require('../controllers/itinerariosControllers')
const {getCities, getOneCity, createCities,  deleteCities,  updateCities} = require('../controllers/ciudadesController')
const {signUpUsers, signInUser, signOutUser, verifyEmail, verificarToken} = require('../controllers/userControllers')

Router.route('/auth/signUp')
.post(validator, signUpUsers)

Router.route('/auth/signIn')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)

Router.route('/verify/:uniqueString')
.get(verifyEmail)

Router.route('/auth/signInToken')
.get(passport.authenticate('jwt',{ session:false }), verificarToken)

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