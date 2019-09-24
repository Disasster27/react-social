import React from 'react';
import A from './Avatar.module.css';

function Avatar( props ) {
       
    return (
        <div className={ A.avatar }>
            <img src={ props.photos && (props.photos.small || "http://placehold.it/100") } alt="Avatar"></img>
         </div>
    )
};

export default Avatar;