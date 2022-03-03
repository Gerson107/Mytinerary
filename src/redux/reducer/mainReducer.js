import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";


const mainReducer = combineReducers({

    Data:citiesReducer

})

export default mainReducer