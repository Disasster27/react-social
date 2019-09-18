import * as serviceWorker from './serviceWorker';
import store from './components/State/Redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

// function renderEntireTree(state) {
    // console.log(store);
    ReactDOM.render(
        <Provider store={ store } >
            <App />
        </Provider>, document.getElementById( 'root' ) );
        
// };

// renderEntireTree(store.getState());

// store.subscribe(() => {
//     let state = store.getState();
//     renderEntireTree(state)});

serviceWorker.unregister();
