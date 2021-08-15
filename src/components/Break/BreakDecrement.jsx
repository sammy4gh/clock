import React from 'react';
import {FaArrowDown} from 'react-icons/fa';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state/index"

const BreakDecrement = (props) => {

    const dispatch = useDispatch()
    const {BREAK_DECREMENT} = bindActionCreators(actionCreators, dispatch)

    return (
        <div id={'break-decrement'}>
            <FaArrowDown onClick={() => BREAK_DECREMENT()}/>
        </div>

    );
};

export default BreakDecrement;