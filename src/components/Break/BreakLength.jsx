import React from 'react';
import {useDispatch, useSelector} from "react-redux";


const BreakLength = (props) => {

    const dispatch = useDispatch()

    const break_length = useSelector(state => state.break_length)


    return (
        <div id="break-length">

            {
                break_length
            }
        </div>
    );
}

export default BreakLength;
