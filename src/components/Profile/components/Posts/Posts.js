import React from 'react';
import P from './Posts.module.css'
import PostItem from './componentPost/PostItem';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../../utils/validators/validators';
import { Textarea } from '../../../Common/FormsControls/FormsControls';

function Post(props) {

    let onAddPost = ( values ) => {
        props.addPost( values.postMessage );
        
    };
    
    let postsElements = props.posts.map(post => <PostItem name={ post.name } key={post.id}/>);

    return (
        <div className={ P.post }>
            <div className={ P.newPost }>
                <AddNewPostReduxForm onSubmit={ onAddPost }/>
            </div>
             { postsElements }
        </div>)
    };
    
    const maxLength10 = maxLengthCreator( 10 );

    const AddNewPostForm = ( props ) => {
        return (
            <form onSubmit={ props.handleSubmit }>
                <div>
                    <Field  component={ Textarea } name={ "postMessage" } placeholder={ "Enter your post" } validate={ [required, maxLength10 ] }/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        )
    };

    const AddNewPostReduxForm = reduxForm({
        form: 'AddNewPostForm',
    })( AddNewPostForm );

export default Post;        