import React from 'react';
import SessionDecrement from "./SessionDecrement";
import SessionIncrement from "./SessionIncrement";
import SessionLength from "./SessionLength";

const Session = (props) => {
    return (
        <div id={'session'}>
            <h1 id="session-label">Session Length</h1>
            <SessionIncrement/>
            <SessionLength/>
            <SessionDecrement/>
        </div>
    );
}

export default Session;