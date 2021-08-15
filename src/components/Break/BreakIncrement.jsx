import React from 'react';
import {FaArrowUp} from 'react-icons/fa';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state/index"

const BreakIncrement = (props) => {

    const dispatch = useDispatch()
    const {BREAK_INCREMENT} = bindActionCreators(actionCreators, dispatch)


    return (
        <div id="break-increment">
            <FaArrowUp onClick={() => BREAK_INCREMENT()}/>
        </div>
    );
}

export default BreakIncrement;