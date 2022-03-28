import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariosReducer from "./itinerariesReducer";
import UserReducer from "./userReducer";


const mainReducer = combineReducers({

    Data:citiesReducer,
    UserReducer,
    itinerariosReducer

})

export default mainReducer