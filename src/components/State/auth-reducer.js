import { authAPI, securityAPI } from "../../api/api";
import { stopSubmit } from 'redux-form';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const GET_CAPTCA_URL_SUCCESS = 'GET_CAPTCA_URL_SUCCESS';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = ( state = initialState, action ) => {
    
    switch( action.type ) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payLoad,
            }
        case GET_CAPTCA_URL_SUCCESS:
            return {
                ...state,
                ...action.payLoad,
            }
        default:
            return state;    
    }
};

export const setAuthUserData = ( userId, email, login, isAuth ) => ({ type: SET_AUTH_USER_DATA, payLoad: { userId, email, login, isAuth } });
export const getCaptchaUrlSuccess = ( captchaUrl ) => ({ type: GET_CAPTCA_URL_SUCCESS, payLoad: { captchaUrl } });


export const getAuthUserData = (  ) => async ( dispatch ) => {
    let response = await authAPI.me();
        if( response.data.resultCode === 0 ) {
            let { id, login, email, } = response.data.data
            dispatch( setAuthUserData( id, email, login, true ) );
        }
}; 
export const login = ( email, password, rememberMe, captcha ) => async ( dispatch ) => {

    let response = await authAPI.login( email, password, rememberMe, captcha )
        if( response.data.resultCode === 0 ) {
            dispatch( getAuthUserData( ) );
        } else {
            if ( response.data.resultCode === 10 ) {
                dispatch( getCaptchaUrl() )
            } 
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch( stopSubmit( "login", { _error: message } ) )
        }
}; 
export const getCaptchaUrl = (  ) => async ( dispatch ) => {

    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch( getCaptchaUrlSuccess( captchaUrl ) )
}; 
export const logout = () => async ( dispatch ) => {
    let response = await authAPI.logout()
        if( response.data.resultCode === 0 ) {
            dispatch( setAuthUserData( null, null, null, false ) );
        }
}; 


export default authReducer;