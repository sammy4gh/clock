import {combineReducers} from "redux";
import breakLengthReducer from "./breakLengthReducer";
import sessionLengthReducer from "./sessionLengthReducer";
import secondsReducer from "./secondsReducer"
import minutesReducer from "./minutesReducer";
import startStopReducer from "./startStopReducer";


const reducers = combineReducers({
    break_length: breakLengthReducer,
    session_length: sessionLengthReducer,
    seconds: secondsReducer,
    minutes: minutesReducer,
    start_stop: startStopReducer
})

export default reducers;