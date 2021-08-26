import React from 'react';
import {FaArrowDown} from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state/index"

const BreakDecrement = (props) => {

    const dispatch = useDispatch()
    const break_length = useSelector(state => state.break_length);
    const {BREAK_DECREMENT, LIMIT_REACH} = bindActionCreators(actionCreators, dispatch)


    return (
        <div id={'break-decrement'}>
            <FaArrowDown onClick={() =>
                break_length > 1 && break_length < 61 ? BREAK_DECREMENT() : LIMIT_REACH()
            }/>
        </div>

    );
};

export default BreakDecrement;