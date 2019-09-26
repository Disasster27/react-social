import { usersAPI, profileAPI } from "../../api/api";
import { stopSubmit } from 'redux-form';

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    postsData: [
        {id: 1, name: 'Text post',},
        {id: 2, name: 'Other text post',},
        {id: 3, name: 'Other text post again',},
    ],
    profile: null,
    status: "",
};

const profileReducer = ( state = initialState, action ) => {
    
    switch(action.type) {
        case ADD_POST:
            {let newPost = {
                id: 5,      
                name: action.postMessage,
            };
            let stateCopy = { ...state };
            stateCopy.postsData = [ ...state.postsData ];
            stateCopy.postsData.push( newPost );
            stateCopy.newPostText = "";
            return stateCopy;}
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case DELETE_POST:
                {let stateCopy = { ...state };
                stateCopy.postsData = [ ...state.postsData ];
                stateCopy.postsData.splice( action.postId, 1 );
            return stateCopy}
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }
        default:
            return state;    
    }
};

export const addPostActionCreator = ( postMessage ) => ( { type: ADD_POST, postMessage } );
export const setUserProfile = ( profile ) => ( { type: SET_USERS_PROFILE, profile, } );
export const setStatus = ( status ) => ( { type: SET_STATUS, status, } );
export const deletePost = ( postId ) => ( { type: DELETE_POST, postId, } );
export const savePhotoSuccess = ( photos ) => ( { type: SAVE_PHOTO_SUCCESS, photos, } );

export const getUserProfile = ( userId ) => async ( dispatch ) => {
    let response = await usersAPI.getProfile( userId )
        dispatch( setUserProfile( response.data ) );
}; 
export const getStatus = ( userId ) => async ( dispatch ) => {
    let response = await profileAPI.getStatus( userId )
        dispatch( setStatus( response.data ) );
}; 
export const updateStatus = ( status ) => async ( dispatch ) => {
    let response = await profileAPI.updateStatus( status )
        if ( response.data.resultCode === 0 ){
            dispatch( setStatus( status ) );
        }
}; 
export const savePhoto = ( file ) => async ( dispatch ) => {
    let response = await profileAPI.savePhoto( file )
        if ( response.data.resultCode === 0 ){
            dispatch( savePhotoSuccess( response.data.data.photos ) );
        }
}; 
export const saveProfile = ( profile ) => async ( dispatch, getState ) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile( profile )
        if ( response.data.resultCode === 0 ){
            dispatch( getUserProfile( userId ) );
        } else {
            dispatch( stopSubmit( 'edit-profile', { _error: response.data.messages[0] } ) );
            return Promise.reject( response.data.messages[0] );
        }
}; 



export default profileReducer;