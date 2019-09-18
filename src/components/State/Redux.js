import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./Profile_ reducer";
import messagesReducer from "./Messages_reducer";
import usersReducer from "./Users_reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducer = combineReducers( {
    profile: profileReducer,
    messages: messagesReducer,
    usersPage: usersReducer ,
    auth: authReducer,
    form: formReducer, } );


let store = createStore( reducer, applyMiddleware(thunkMiddleware) );

window.store = store;

export default store;