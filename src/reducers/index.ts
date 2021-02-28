import counterReducer from "./counter"
import isLogged from "./isLogged";

import { combineReducers } from "redux";

const allReducer = combineReducers({
    counter: counterReducer,
    isLogger: isLogged,
})

export default allReducer;

export type RootState = ReturnType<typeof allReducer>