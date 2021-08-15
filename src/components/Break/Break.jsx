import React from 'react';
import BreakDecrement from "./BreakDecrement";
import BreakLength from "./BreakLength";
import BreakIncrement from "./BreakIncrement";

const Break = (props) => {
    return (

        <div id={'break'}>
            <h1 id="break-label">Break Length</h1>
            <BreakIncrement/>
            <BreakLength/>
            <BreakDecrement/>


        </div>

    );
}

export default Break;