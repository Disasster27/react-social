import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto } from '../State/Profile_ reducer';
import { withRouter } from 'react-router-dom';
import{ compose } from 'redux';

class ProfileContainer extends React.Component {
   
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if( !userId ) {
            userId = this.props.userIdLogin;
            if( !userId ) {
                this.props.history.push( "/login" );
            }
        };
        this.props.getUserProfile( userId );
        this.props.getStatus( userId );
    }

    componentDidUpdate(prevProps, prevState) {
        if( this.props.match.params.userId !== prevProps.match.params.userId ){
            
            let userId = this.props.match.params.userId;
            if( !userId ) {
                userId = this.props.userIdLogin;
                if( !userId ) {
                    this.props.history.push( "/login" );
                }
            };
            this.props.getUserProfile( userId );
            this.props.getStatus( userId );
        }
    }
   
    render() {
        return (
            <Profile { ...this.props } 
                    isOwner={ !this.props.match.params.userId }
                    profile={ this.props.profile } 
                    status={ this.props.status } 
                    updateStatus={ this.props.updateStatus }
                    savePhoto={ this.props.savePhoto }/>
        )
    };
};

let mapStateToProps = ( state ) => { 
    return {
        profile: state.profile.profile,
        status: state.profile.status,
        userIdLogin: state.auth.userId,
        isAuth: state.auth.isAuth, 
    }
};

export default compose( connect( mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto } ), withRouter, )( ProfileContainer );
