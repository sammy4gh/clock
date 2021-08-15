import React from 'react';
import {BiReset} from "react-icons/bi";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";

const Reset = (props) => {

    const dispatch = useDispatch()
    const {RESET} = bindActionCreators(actionCreators, dispatch)

    return (
        <div id={'reset'}>
            <BiReset onClick={() => RESET()}/>
        </div>
    );
}

export default Reset;