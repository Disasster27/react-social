import React from 'react';
import {NavLink} from 'react-router-dom';
import Avatar from '../../../Profile/components/Info/componentsInfo/Avatar';
import D from './DialogItem.module.css';

function DialogItem(props) {
    return (
        <div className={D.dialogItem}>
            <Avatar />
            <div className={D.dialogName}>
                <NavLink to={"/messages/" + props.id}>{props.name}</NavLink> 
            </div>
        </div>
    )
};

export default DialogItem;