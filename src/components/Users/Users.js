import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';
// import * as axios from 'axios';
// import { usersAPI } from "../../api/api";

let Users =  ( props ) => {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );

    let page = [ ];
    for ( let i = 1; i <= pagesCount; i++ ) {
        page.push( i );
    }

    return (
        <div>
                <div>
                    { page.map( p => {
                        return <span className={ props.currentPage === p ? styles.selectedPage : '' }
                        onClick={ () => { props.onPageChanged(p); } } > { p } </span>
                    } ) }
                </div>
                { props.users.map( u => <div key={ u.id } >
                    <span>
                        <div>
                            <NavLink to={ `/profile/${ u.id }` }>
                                <img alt="Ava" src={ u.photos.small ? u.photos.small : "http://placehold.it/100" } 
                                    className={styles.usersPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            { u.followed ? 
                                <button disabled={ props.followingIsProgress.some( id => id === u.id ) } onClick={ () => { 
                                    props.unfollow( u.id );

                                // props.toggleFollowingProgress( true, u.id );
                                // // axios.delete( `https://social-network.samuraijs.com/api/1.0/follow/${ u.id }`, { withCredentials: true, headers: { "API-KEY" : "5705cc87-7818-44c2-9772-322f75009900" } } )
                                // usersAPI.unfollow( u.id )   
                                //     .then( response => {
                                //         if ( response.data.resultCode === 0 ) { 
                                //             props.unfollow( u.id );
                                //         };
                                //         props.toggleFollowingProgress( false, u.id );
                                //     } );
                                
                                } } >UNFOLLOW</button> : 
                                <button disabled={ props.followingIsProgress.some( id => id === u.id ) } onClick={ () => { 
                                    props.follow( u.id );

                                    // props.toggleFollowingProgress( true, u.id );
                                    // // axios.post( `https://social-network.samuraijs.com/api/1.0/follow/${ u.id }`, {}, { withCredentials: true, headers: { "API-KEY" : "5705cc87-7818-44c2-9772-322f75009900" } } )
                                    // usersAPI.follow( u.id )
                                    //     .then( response => {
                                    //         if ( response.data.resultCode === 0 ) { 
                                    //             props.follow( u.id );
                                    //         };
                                    //         props.toggleFollowingProgress( false, u.id );
                                    //     } );
                                } } >FOLLOW</button> 
                            }
                            
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{ u.name }</div>
                            <div>{ u.status }</div>
                        </span>
                        <span>
                            <div>{ "u.location.city" }</div>
                            <div>{ "u.location.country" }</div>
                        </span>
                    </span>
                </div> ) }
            </div>
    )
};

export default Users;