import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";


const Timer = (props) => {

    const dispatch = useDispatch()
    const {MINUTES_SUBTRACTION, SECONDS} = bindActionCreators(actionCreators, dispatch)


    const break_length = useSelector(state => state.break_length)
    const session_length = useSelector(state => state.session_length)
    const time = useSelector(state => state.minutes)
    const minutes = useSelector(state => state.minutes.minutes())
    const seconds = useSelector(state => state.minutes.seconds())

    console.log('time',)


    useEffect(() => {


    })


    return (
        <div id={'timer'}>
            <h3 id="timer-label">Session</h3>
            <h1 id="time-left">
                {` ${minutes < 10 ? 0 + '' + minutes : minutes} : ${seconds < 10 ? 0 + '' + seconds : seconds} `}
            </h1>
        </div>
    );
}


export default Timer;
