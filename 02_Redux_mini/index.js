import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/store';

ReactDOM.render(<App/>,document.getElementById('root'))

store.subscribe(()=>{
    ReactDOM.render(<App/>,document.getElementById('root'))
})