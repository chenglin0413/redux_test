import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/store';
import {Provider} from 'react-redux';

ReactDOM.render(
    /*  此處需要用Provider包裹APP，目的是讓App的所有後代容器組件，都能接收到store */
    <Provider store={store}>
        <App/>
    </Provider>
,document.getElementById('root'))

