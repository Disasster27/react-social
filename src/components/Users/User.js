import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';

let User =  ( { user, followingIsProgress, unfollow, follow } ) => {
    
    return (
        <div>
            <span>
                <div>
                    <NavLink to={ `/profile/${ user.id }` }>
                        <img alt="Ava" src={ user.photos.small || "http://placehold.it/100" } 
                            className={styles.usersPhoto} />
                    </NavLink>
                </div>
                <div>
                    { user.followed ? 
                        <button disabled={ followingIsProgress.some( id => id === user.id ) } onClick={ () => { 
                            unfollow( user.id );
                        } } >UNFOLLOW</button> : 
                            <button disabled={ followingIsProgress.some( id => id === user.id ) } onClick={ ()=> { 
                            follow( user.id );
                        } } >FOLLOW</button> 
                    }
                    
                </div>
            </span>
            <span>
                <span>
                    <div>{ user.name }</div>
                    <div>{ user.status }</div>
                </span>
                <span>
                    <div>{ "user.location.city" }</div>
                    <div>{ "user.location.country" }</div>
                </span>
            </span>
        </div>
    )
};

export default User;