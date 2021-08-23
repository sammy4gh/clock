import React from 'react';
import {BiReset} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";

const Reset = (props) => {

    const dispatch = useDispatch()

    const intervalID = useSelector((state) => state.timer)

    const {RESET, CLEAR_INTERVAL, START_STOP} = bindActionCreators(actionCreators, dispatch)

    return (
        <div id={'reset'}>
            <BiReset onClick={() => {
                return (
                    RESET(),
                        CLEAR_INTERVAL(intervalID),
                        START_STOP()
                )
            }}/>
        </div>
    );
}

export default Reset;