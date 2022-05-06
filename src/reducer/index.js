import { combineReducers } from "redux";
import CreateReducer from "../redux/create/reducer";
import ReadReducer from "../redux/read/reducer";



const rootReducer = combineReducers({
    CreateReducer,
    ReadReducer,
})

export default rootReducer;