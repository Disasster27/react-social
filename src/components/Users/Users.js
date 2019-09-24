import React from 'react';
import Pagination from '../Common/Pagination/Pagination';
import User from './User';
import style from './Users.module.css';

let Users =  ( { currentPage, onPageChanged, totalUsersCount, pageSize, ...props} ) => {

    return (
        <div>
            <Pagination currentPage={ currentPage } onPageChanged={ onPageChanged } pageSize={ pageSize } totalItemsCount={ totalUsersCount } />
            <div className={ style.UserContainer }>
                { props.users.map( u => <User user={ u } 
                                            key={ u.id }
                                            followingIsProgress={ props.followingIsProgress }
                                            unfollow={ props.unfollow }
                                            follow={props.follow } />
                 ) }
            </div>
        </div>
    )
};

export default Users;