import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../State/Profile_ reducer';
import { withRouter, Redirect } from 'react-router-dom';
// import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import{ compose } from 'redux';

class ProfileContainer extends React.Component {
   
    componentDidMount() {
        // console.log(this.props);
        let userId = this.props.match.params.userId;
        if( !userId ) {
            userId = 1645;
        };

        this.props.getUserProfile( userId );
        // usersAPI.getProfile( userID )
        // // axios.get(`https://social-network.samuraijs.com/api/1.0//profile/${ userID }`)
        //     .then(response => {
        //         this.props.setUserProfile( response.data );
        //     } );
       
        this.props.getStatus( userId );
    }
   
    render() {
        // if ( this.props.isAuth === false) {
        //     return ( 
        //         <Redirect to={ "/login" } />
        //     )
        // };

        return (
            <Profile { ...this.props } profile={ this.props.profile } status={ this.props.status } updateStatus={ this.props.updateStatus }/>
        )
    };
};

let mapStateToProps = ( state ) => { 
    return {
        profile: state.profile.profile,
        status: state.profile.status,
    }
};

// let AuthRedirectComponent = withAuthRedirect( ProfileContainer );

// ( props ) => {
//     if ( this.props.isAuth === false) {
//         return <Redirect to={ "/login" } /> };
//     return ( <ProfileContainer { ...props } /> ) };


// let mapStateToPropsForRedirect = ( state ) => { 
//         return {
//             isAuth: state.auth.isAuth,
//         }
//     };

//     AuthRedirectComponent = connect( mapStateToPropsForRedirect )( AuthRedirectComponent );

// compose( connect( mapStateToProps, { getUserProfile, } ), withRouter, withAuthRedirect )( ProfileContainer );


// let WithUrlDataContainerComponent = withRouter( AuthRedirectComponent )

export default compose( connect( mapStateToProps, { getUserProfile, getStatus, updateStatus } ), withRouter, /*withAuthRedirect */)( ProfileContainer );
// connect( mapStateToProps, { getUserProfile, } )( WithUrlDataContainerComponent );