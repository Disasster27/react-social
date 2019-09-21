import React from 'react'; 
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, getUsers } from '../State/Users_reducer';
import Users from './Users';
import Preloader from '../Common/preloader/Preloader';
import{ compose } from 'redux';
import { getUserSuperSelector,getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingIsProgress } from '../State/users-selectors';

class UsersComponent extends React.Component{
    
    componentDidMount() {
        
        this.props.getUsers( this.props.currentPage, this.props.pageSize );

    };

    onPageChanged = ( pageNumber ) => {
        this.props.getUsers( pageNumber, this.props.pageSize );

    }
    
    render() {
        
        return (
            <>
                { this.props.isFetching ? <Preloader /> : null }
                <Users totalUsersCount={ this.props.totalUsersCount } 
                        pageSize={ this.props.pageSize } 
                        currentPage={ this.props.currentPage } 
                        onPageChanged={ this.onPageChanged } 
                        users={ this.props.users } 
                        follow={ this.props.follow } 
                        unfollow={ this.props.unfollow }
                        followingIsProgress={ this.props.followingIsProgress } />
            </>  
        )
    };
};

let mapStateToProps = ( state ) => {
    return {
        users: getUserSuperSelector( state ),
        pageSize: getPageSize( state ),
        totalUsersCount: getTotalUsersCount( state ),
        currentPage: getCurrentPage( state ),
        isFetching: getIsFetching( state ),
        followingIsProgress:  getFollowingIsProgress( state )
    }
};

export default compose( connect( mapStateToProps, { follow, unfollow, setCurrentPage, getUsers } ) )( UsersComponent );

    
    
    
    
   