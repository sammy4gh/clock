import React from 'react';
import {FaArrowUp} from 'react-icons/fa'
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";


const SessionIncrement = (props) => {

    const dispatch = useDispatch()
    const session_length = useSelector(state => state.session_length);
    const {SESSION_INCREMENT, MINUTES_ADDITION, LIMIT_REACH} = bindActionCreators(actionCreators, dispatch)

    return (


        <div id="session-increment">
            <FaArrowUp onClick={() => {
                return (
                    session_length > 1 && session_length < 61 ? (SESSION_INCREMENT() , MINUTES_ADDITION()) : LIMIT_REACH()


                )
            }}/>
        </div>

    );
}

export default SessionIncrement;