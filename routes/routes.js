const Router = require('express').Router();
const validator = require('../config/validator');
const passport = require('../config/passport');
const {addActivity, activityOfItinerary} = require('../controllers/activities')
const { getitinerarios, getOneItinerario, deleteItinerarios, updateItinerarios, createItinerarios, LikeAndDislike } = require('../controllers/itinerariosControllers')
const {getCities, getOneCity, createCities,  deleteCities,  updateCities} = require('../controllers/ciudadesController')
const {signUpUsers, signInUser, signOutUser, verifyEmail, verificarToken, getAllUsers} = require('../controllers/userControllers')
const { addComment, getComments, updateComment, deleteCommen} = require('../controllers/commentContollers')


Router.route('/auth/signUp')
.post(validator, signUpUsers)

Router.route("/users")
.get(getAllUsers)

Router.route('/auth/signIn')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)

Router.route('/verify/:uniqueString')
.get(verifyEmail)

Router.route('/auth/signInToken')
.get(passport.authenticate('jwt',{ session:false }), verificarToken)

Router.route('/activities')
.post(addActivity)

Router.route('/activities/:itineraryId')
.get(activityOfItinerary)

Router.route('/allitinerarios')
.get(getitinerarios)
.post(createItinerarios)

Router.route('/allitinerarios/:id')
.delete(deleteItinerarios)
.put(updateItinerarios)
.get(getOneItinerario)


Router.route('/itinerarios/likes/:id/:cityId')
.put(passport.authenticate('jwt',{ session: false }), LikeAndDislike)

Router.route('/itinerarios/comment')
.post(passport.authenticate("jwt", { session: false }), addComment)
.put(passport.authenticate("jwt", { session: false }), updateComment)

Router.route('/itinerarios/deletecomment/')
.post(passport.authenticate("jwt", { session: false }), deleteCommen)


Router.route('/allcities')
.get(getCities)
.post(createCities)

Router.route('/allcities/:id')
.delete(deleteCities)
.put(updateCities)
.get(getOneCity)


module.exports = Router


// <textarea
// type="text"
// className="card-text textComments"
// onChange={(event) => setModifid(event.target.value)}
// defaultValue={dato.comentary}
// />