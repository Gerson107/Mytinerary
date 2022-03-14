import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import UserReducer from "./userReducer";


const mainReducer = combineReducers({

    Data:citiesReducer,
    UserReducer

})

export default mainReducer