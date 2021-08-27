import {combineReducers} from "redux";
import breakLengthReducer from "./breakLengthReducer";
import sessionLengthReducer from "./sessionLengthReducer";
import secondsReducer from "./secondsReducer"
import minutesReducer from "./minutesReducer";
import startStopReducer from "./startStopReducer";
import timerReducer from "./timerReducer";
import msgReducer from "./msgReducer"
import soundClipReducer from "./soundClipReducer";
import soundPlayReducer from "./soundPlayReducer";


const reducers = combineReducers({
    break_length: breakLengthReducer,
    session_length: sessionLengthReducer,
    seconds: secondsReducer,
    minutes: minutesReducer,
    start_stop: startStopReducer,
    timer: timerReducer,
    msg: msgReducer,
    soundClip: soundClipReducer,
    playSound: soundPlayReducer,
})

export default reducers;