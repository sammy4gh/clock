import React from 'react';
import StartStop from "./StartStop";
import Reset from "./Reset";
import {Row} from "react-bootstrap";

const Controls = (props) => {
    return (
        <div id="controls">

            <h2>
                <Row className={'justify-content-center'}>
                    <StartStop className="mb-8"/>
                    <Reset/>
                </Row>
            </h2>


        </div>
    );
}

export default Controls;
