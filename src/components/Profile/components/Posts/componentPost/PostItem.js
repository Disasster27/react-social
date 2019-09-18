import React from 'react';
import Avatar from '../../Info/componentsInfo/Avatar';
import PI from './PostItem.module.css'

function PostItem(props) {
    return (
        <div className={PI.postItem}>
            <Avatar />    
            <div>{props.name}</div>
        </div>
    )
};

export default PostItem;