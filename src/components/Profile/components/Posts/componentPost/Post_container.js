// import React from 'react';
import {/*updateNewPostTextActionCreator,*/ addPostActionCreator} from '../../../../State/Profile_ reducer';
import Post from '../Posts';
import {connect} from 'react-redux';

// function PostContainer() {

//      // console.log(state);
      
//     return (
//         <StoreContext.Consumer>{
//             (store) =>{
//                 let state = store.getState();
//                 let onPostChange = (postMessage) => {
//                     let action = updateNewPostTextActionCreator(postMessage);
//                     store.dispatch(action);
//                 };
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };
//                 return(<Post updateNewPostText={onPostChange} addPost={addPost} posts={state.profile.postsData}
//                 newPostText={state.profile.newPostText}/>)}
//             }
//         </StoreContext.Consumer>    )
//     };

    let mapStateToProps = (state) => {
        return {
            posts: state.profile.postsData,
            newPostText: state.profile.newPostText,
        }
    };
    let mapDispatchTooProps = (dispatch) => {
        return {
            // updateNewPostText: (postMessage) => {
            //     let action = updateNewPostTextActionCreator(postMessage);
            //     dispatch(action);
            // },
            addPost: ( postMessage ) => {
                dispatch(addPostActionCreator( postMessage ))
            }
        }
    };


const PostContainer = connect(mapStateToProps, mapDispatchTooProps)(Post);


    export default PostContainer;        