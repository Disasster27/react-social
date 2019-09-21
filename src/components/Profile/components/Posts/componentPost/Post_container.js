import React from 'react';
import { addPostActionCreator} from '../../../../State/Profile_ reducer';
import Post from '../Posts';
import {connect} from 'react-redux';

    let mapStateToProps = (state) => {
        return {
            posts: state.profile.postsData,
            newPostText: state.profile.newPostText,
        }
    };
    let mapDispatchTooProps = (dispatch) => {
        return {
            addPost: ( postMessage ) => {
                dispatch(addPostActionCreator( postMessage ))
            }
        }
    };


const PostContainer = connect(mapStateToProps, mapDispatchTooProps)(Post);


    export default PostContainer;        