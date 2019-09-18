import { authAPI } from "../../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';


let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = ( state = initialState, action ) => {
    
    switch( action.type ) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payLoad,
                // isAuth: true, 
            }
        
        default:
            return state;    
    }
};

export const setAuthUserData = ( userID, email, login, isAuth ) => ({ type: SET_AUTH_USER_DATA, payLoad: { userID, email, login, isAuth } });


export const getAuthUserData = (  ) => ( dispatch ) => {
    return (
        authAPI.me().then( response => {
            if( response.data.resultCode === 0 ) {
                let { id, login, email, } = response.data.data
                dispatch( setAuthUserData( id, email, login, true ) );
            }
        } )
    )
};
export const login = ( email, password, rememberMe ) => ( dispatch ) => {
    return (
        authAPI.login( email, password, rememberMe ).then( response => {
            if( response.data.resultCode === 0 ) {
                let { id, login, email, } = response.data.data
                dispatch( getAuthUserData( ) );
            }
        } )
    )
};
export const logout = () => ( dispatch ) => {
    return (
        authAPI.logout().then( response => {
            if( response.data.resultCode === 0 ) {
                dispatch( setAuthUserData( null, null, null, false ) );
            }
        } )
    )
};


export default authReducer;