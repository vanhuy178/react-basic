import { combineReducers } from "redux";
import { cakeReducer } from "./cakeReducer/index";
import { iceCreamReducer } from "./iceCreamReducer/index";


export const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})