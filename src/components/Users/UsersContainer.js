import React from 'react'; 
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, getUsers } from '../State/Users_reducer';
import Users from './Users';
import Preloader from '../Common/preloader/Preloader';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import{ compose } from 'redux';

class UsersComponent extends React.Component{
    
    componentDidMount() {
        
        this.props.getUsers( this.props.currentPage, this.props.pageSize );

    };

    onPageChanged = ( pageNumber ) => {
        // this.props.setCurrentPage( pageNumber );
        // this.props.setToggleIsFetching( true );

        // // axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${ pageNumber }&count=${ this.props.pageSize }`, { withCredentials: true } )


        // getUsers( pageNumber, this.props.pageSize ).then( data => { 
        //         this.props.setToggleIsFetching( false );
        //         this.props.setUsers( data.items ); } );

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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingIsProgress: state.usersPage.followingIsProgress
    }
};

// let mapDispatchToProps =  ( dispatch ) => {
//     return {
//         follow: ( usersId ) => {
//             dispatch( followAC( usersId ) )
//         },
//         unfollow: (usersId) => {
//             dispatch( unfollowAC( usersId) )
//         },
//         setUsers: (users) => {
//             dispatch( setUsersAC( users ) )
//         },
//         setCurrentPage: ( pageNumber ) => {
//             dispatch( setCurrentPageAC( pageNumber) )
//         },
//         setTotalUsersCount: ( totalCount ) => {
//             dispatch( setTotalUsersCountAC(totalCount) )
//         },
//         setToggleIsFetching: ( isFetching ) => {
//             dispatch( setToggleIsFetchingAC(isFetching) )
//         },
//     } 
// };

// let withRedirect = withAuthRedirect( UsersComponent );


export default compose( withAuthRedirect, connect( mapStateToProps, { follow, unfollow, setCurrentPage, getUsers } ) )( UsersComponent );

// withAuthRedirect( connect( mapStateToProps, { follow, unfollow, setCurrentPage, getUsers } )( UsersComponent ) );