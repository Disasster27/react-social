import { usersAPI, profileAPI } from "../../api/api";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


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
        default:
            return state;    
    }
};

export const addPostActionCreator = ( postMessage ) => ( { type: ADD_POST, postMessage } );
export const setUserProfile = ( profile ) => ( { type: SET_USERS_PROFILE, profile, } );
export const setStatus = ( status ) => ( { type: SET_STATUS, status, } );
export const deletePost = ( postId ) => ( { type: DELETE_POST, postId, } );

export const getUserProfile = ( userId ) => async ( dispatch ) => {
    let response = await usersAPI.getProfile( userId )
        dispatch( setUserProfile( response.data ) );
} 

export const getStatus = ( userId ) => async ( dispatch ) => {
    let response = await profileAPI.getStatus( userId )
        dispatch( setStatus( response.data ) );
} 
export const updateStatus = ( status ) => async ( dispatch ) => {
    let response = await profileAPI.updateStatus( status )
        if ( response.data.resultCode === 0 ){
            dispatch( setStatus( status ) );
        }
} 



export default profileReducer;