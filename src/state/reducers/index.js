import {combineReducers} from "redux";
import breakLengthReducer from "./breakLengthReducer";
import sessionLengthReducer from "./sessionLengthReducer";
import secondsReducer from "./secondsReducer"
import minutesReducer from "./minutesReducer";
import startStopReducer from "./startStopReducer";
import timerReducer from "./timerReducer";


const reducers = combineReducers({
    break_length: breakLengthReducer,
    session_length: sessionLengthReducer,
    seconds: secondsReducer,
    minutes: minutesReducer,
    start_stop: startStopReducer,
    timer: timerReducer,
})

export default reducers;