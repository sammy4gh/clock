import React from 'react';
import {FaArrowDown} from 'react-icons/fa';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";


const SessionDecrement = (props) => {
    const dispatch = useDispatch()
    const {SESSION_DECREMENT, MINUTES_SUBTRACTION} = bindActionCreators(actionCreators, dispatch)

    return (
        <div id={'session-decrement'}>
            <FaArrowDown onClick={() => {
                return (
                    SESSION_DECREMENT(),
                        MINUTES_SUBTRACTION()
                )
            }}/>
        </div>
    );
}

export default SessionDecrement;