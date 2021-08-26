import React from 'react';
import {BiPauseCircle, BiPlayCircle} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";


const StartStop = (props) => {

    const start_stop = useSelector((state) => state.start_stop)
    const intervalID = useSelector((state) => state.timer)
    const dispatch = useDispatch()
    const {
        SECONDS_SUBTRACTION: SECONDS_SUBTRACTION,
        SECONDS,
        START_STOP,
        PAUSE,
        SET_INTERVAL,
        CLEAR_INTERVAL
    } = bindActionCreators(actionCreators, dispatch)

    return (


        <div id={'start_stop'} onClick={() => {

            START_STOP()
            start_stop === true ? CLEAR_INTERVAL(intervalID) : SET_INTERVAL(setInterval(() => SECONDS_SUBTRACTION(), 1000))

        }}>
            {start_stop ? <BiPauseCircle/> : <BiPlayCircle/>}
        </div>
    );
}

export default StartStop;