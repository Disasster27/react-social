import React from 'react';
import M from './../../Messages.module.css';

function MessageItem(props) {
    return (
        <div className={M.message}>{props.message}</div>
        
    )
};

export default MessageItem;