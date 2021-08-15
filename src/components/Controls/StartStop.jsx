import React from 'react';
import {BiPauseCircle, BiPlayCircle} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";


const StartStop = (props) => {

    const start_stop = useSelector((state) => state.start_stop)

    const dispatch = useDispatch()
    const {MINUTES_SUBTRACTION, SECONDS, START_STOP, PAUSE} = bindActionCreators(actionCreators, dispatch)


    return (


        <div id={'start_stop'} onClick={() => {
            var timer = setInterval(() => MINUTES_SUBTRACTION(), 1000)

            START_STOP()

            while (!start_stop) {
                return timer
                console.log('clear')
            }


        }}>
            {start_stop ? <BiPauseCircle/> : <BiPlayCircle/>}
        </div>
    );
}

export default StartStop;