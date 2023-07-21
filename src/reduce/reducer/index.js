import { combineReducers } from "redux";
import { counterReduce } from "./counter.reduce";
import { getFacilitiReducer } from "./faciliti.reducer";

export const rootReducer = combineReducers({
    counter:counterReduce,

    facidata : getFacilitiReducer
   
})