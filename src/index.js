import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./state/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);

