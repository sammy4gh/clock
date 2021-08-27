import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";


const Timer = (props) => {


    const dispatch = useDispatch()
    const {
        START_STOP,
        BREAK_INCREMENT,
        CLEAR_INTERVAL,
        COUNTED_DOWN,
        BREAK_DECREMENT,
        BREAK,
        SESSION,
    } = bindActionCreators(actionCreators, dispatch)


    const break_length = useSelector(state => state.break_length)
    const session_length = useSelector(state => state.session_length)
    const intervalID = useSelector((state) => state.timer)
    const msg = useSelector(state => state.msg)
    const soundClip = useSelector(state => state.soundClip)
    const minutes = useSelector(state => state.minutes.minutes())
    const seconds = useSelector(state => state.minutes.seconds())

    function sound() {
        const sound = document.getElementById(soundClip.id)
        sound.currentTime = 0
        sound.volume = 1
        sound.play()
        return sound;
    }

    return (

        <div id={'timer'}>

            {minutes === 0 && seconds === 0 ? (COUNTED_DOWN(session_length), BREAK_DECREMENT(), BREAK(), sound()) : null}
            {break_length < 1 ? (CLEAR_INTERVAL(intervalID), START_STOP(), BREAK_INCREMENT(), SESSION()) : null}
            <h3 id="timer-label">{msg}</h3>
            <audio id={soundClip.id} src={soundClip.src}>

            </audio>
            <h1 id="time-left">
                {` ${minutes < 10 ? 0 + '' + minutes : minutes} : ${seconds < 10 ? 0 + '' + seconds : seconds} `}
            </h1>
        </div>
    );
}


export default Timer;
