import React from 'react';
import {useSelector} from "react-redux";


const SessionLength = (props) => {

    const session_length = useSelector(state => state.session_length)

    return (

        <div id={'session-length'}>
            {session_length}
        </div>
    );
}

export default SessionLength;
