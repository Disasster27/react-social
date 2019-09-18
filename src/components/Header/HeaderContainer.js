import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUserData, } from '../State/auth-reducer';

class HeaderContainer extends React.Component  {
   
    componentDidMount () {
        // axios.get( `https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true } )
        // authAPI.me()
        //     .then( response => {
        //         //  debugger
        //         if( response.data.resultCode === 0 ) {
        //             let { id, login, email, } = response.data.data
        //             this.props.setAuthUserData( id, email, login );
                    
        //         }
        //     } 
        // );
        this.props.getAuthUserData()
    };

    render() {
        return (
            <Header { ...this.props } />
        )
    }; 
};

const mapStateToProps = ( state ) => ( { 
    isAuth: state.auth.isAuth,
    login: state.auth.login,
} );


export default connect( mapStateToProps, { getAuthUserData, } )( HeaderContainer );