import { usersAPI, profileAPI } from "../../api/api";

const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    postsData: [
        {id: 1, name: 'Text post',},
        {id: 2, name: 'Other text post',},
        {id: 3, name: 'Other text post again',},
    ],
    // newPostText: '',
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
        // case UPDATE_NEW_POST_TEXT:
        //     {let stateCopy = { ...state };
        //     stateCopy.newPostText = action.newText;
        //     return stateCopy;}
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
        default:
            return state;    
    }
};

export const addPostActionCreator = ( postMessage ) => ( { type: ADD_POST, postMessage } );
// export const updateNewPostTextActionCreator = ( postMessage ) => ( { type: UPDATE_NEW_POST_TEXT, newText: postMessage, } );
export const setUserProfile = ( profile ) => ( { type: SET_USERS_PROFILE, profile, } );
export const setStatus = ( status ) => ( { type: SET_STATUS, status, } );


export const getUserProfile = ( userId ) => ( dispatch ) => {
    return ( 
        usersAPI.getProfile( userId ).then(response => {
            dispatch( setUserProfile( response.data ) );
        } )
    )
};
export const getStatus = ( userId ) => ( dispatch ) => {
    return ( 
        profileAPI.getStatus( userId ).then(response => {
            dispatch( setStatus( response.data ) );
        } )
    )
};
export const updateStatus = ( status ) => ( dispatch ) => {
    return ( 
        profileAPI.updateStatus( status ).then(response => {
            if ( response.data.resultCode === 0 ){
                dispatch( setStatus( status ) );
            }
        } )
    )
};



export default profileReducer;