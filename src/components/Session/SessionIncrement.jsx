import React from 'react';
import {FaArrowUp} from 'react-icons/fa'
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";


const SessionIncrement = (props) => {

    const dispatch = useDispatch()
    const {SESSION_INCREMENT, MINUTES_ADDITION} = bindActionCreators(actionCreators, dispatch)

    return (


        <div id="session-increment">
            <FaArrowUp onClick={() => {
                return (
                    SESSION_INCREMENT(),
                        MINUTES_ADDITION()
                )
            }}/>
        </div>

    );
}

export default SessionIncrement;