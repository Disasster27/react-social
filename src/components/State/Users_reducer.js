import { usersAPI } from "../../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IS_PROGRESS = 'TOGGLE_IS_FOLLOWING_IS_PROGRESS';

let initialState = {
    users: [ ],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingIsProgress: [],
};

const usersReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if ( u.id === action.userId ) {
                        return { ...u,followed: true }
                    }
                    return u;
                } )
            }
        case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map( u => {
                        if(u.id === action.userId) {
                            return { ...u,followed: false }
                        }
                        return u;
                    } )
                }
        case SET_USERS: {
            return {
                ...state,
                users: action.users,
            }
        }    
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }    
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount,
            }
        }    
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }    
        case TOGGLE_IS_FOLLOWING_IS_PROGRESS: {
            return {
                ...state,
                followingIsProgress: action.isFetching ? [ ...state.followingIsProgress, action.userId ] : state.followingIsProgress.filter( id => id != action.userId ),
            }
        }    
        default:
            return state;    
    }
};

export const followSuccess = ( userId ) => ( { type: FOLLOW, userId } );
export const unfollowSuccess = ( userId ) => ( { type: UNFOLLOW, userId } );
export const setUsers = ( users ) => ( { type: SET_USERS, users } );
export const setCurrentPage = ( currentPage ) => ( { type: SET_CURRENT_PAGE, currentPage } );
export const setTotalUsersCount = ( totalCount ) => ( { type: SET_TOTAL_USERS_COUNT, totalCount } );
export const setToggleIsFetching = ( isFetching ) => ( { type: TOGGLE_IS_FETCHING, isFetching } );
export const toggleFollowingProgress = ( isFetching, userId ) => ( { type: TOGGLE_IS_FOLLOWING_IS_PROGRESS, isFetching, userId } );


export const getUsers = ( currentPage, pageSize ) => { 
    return async ( dispatch ) => {
        dispatch( setCurrentPage( currentPage ) );
        dispatch( setToggleIsFetching( true ) );
        let data = await usersAPI.getUsers( currentPage, pageSize );
        dispatch( setToggleIsFetching( false ) );
        dispatch( setUsers( data.items ) );
        dispatch( setTotalUsersCount ( data.totalCount ) );
        } 
};
  

export const follow = ( userId ) => { 
    return async ( dispatch ) => {
        dispatch( toggleFollowingProgress( true, userId ) );
        let response = await usersAPI.follow( userId );
        if ( response.data.resultCode === 0 ) { 
            dispatch( followSuccess( userId ) );
        };
        dispatch( toggleFollowingProgress( false, userId ) );
    }
};
   

export const unfollow = ( userId ) => { 
    return async ( dispatch ) => {
        dispatch( toggleFollowingProgress( true, userId ) );
        let response = await usersAPI.unfollow( userId ); 
        if ( response.data.resultCode === 0 ) { 
            dispatch( unfollowSuccess( userId ) );
        };
        dispatch( toggleFollowingProgress( false, userId ) );
    } 
};
  

export default usersReducer;