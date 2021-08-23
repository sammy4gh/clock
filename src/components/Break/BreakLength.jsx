import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";


const BreakLength = (props) => {

    const dispatch = useDispatch()

    const break_length = useSelector(state => state.break_length)
    const {} = bindActionCreators(actionCreators, dispatch)


    return (
        <div id="break-length">

            {
                break_length
            }
        </div>
    );
}

export default BreakLength;
