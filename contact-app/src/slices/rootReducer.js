import { combineReducers } from "redux";

import contactReducer from "./contactSlice"
const rootReducer = combineReducers({
    contact : contactReducer
})

export default rootReducer