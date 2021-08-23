import React from 'react';
import {FaArrowUp} from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state/index"

const BreakIncrement = (props) => {

    const dispatch = useDispatch()
    const break_length = useSelector(state => state.break_length);
    const {BREAK_INCREMENT, LIMIT_REACH} = bindActionCreators(actionCreators, dispatch)


    return (
        <div id="break-increment">
            <FaArrowUp onClick={() =>
                break_length > 1 && break_length < 61 ? BREAK_INCREMENT() : LIMIT_REACH()

            }/>
        </div>
    );
}

export default BreakIncrement;