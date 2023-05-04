import {combineReducers} from "redux";
import {burgerReducer} from "./burgerReducer";
import {themeReducer} from "./themeReducer";

export const rootReducer = combineReducers({
    burger: burgerReducer,
    theme: themeReducer
})