import React from 'react';
import {FaArrowDown} from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";


const SessionDecrement = (props) => {
    const dispatch = useDispatch()
    const session_length = useSelector(state => state.session_length)
    const {SESSION_DECREMENT, MINUTES_SUBTRACTION, LIMIT_REACH} = bindActionCreators(actionCreators, dispatch)

    return (
        <div id={'session-decrement'}>
            <FaArrowDown onClick={() => {
                return (
                    session_length > 1 && session_length < 61 ? (SESSION_DECREMENT() , MINUTES_SUBTRACTION()) : LIMIT_REACH()

                )
            }}/>
        </div>
    );
}

export default SessionDecrement;