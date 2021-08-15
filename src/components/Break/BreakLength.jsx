import React from 'react';
import {useSelector} from "react-redux";

const BreakLength = (props) => {

    const break_Length = useSelector(state => state.break_length)


    return (
        <div id="break-length">
            {break_Length}
        </div>
    );
}

export default BreakLength;
