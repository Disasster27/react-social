import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import NavMain from './components/Nav_main/Nav-main';
// import Music from './components/Music/Music';
// import News from './components/News/News';
// import Settings from './components/Settings/Settings';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './components/State/app-reducer';
import { compose } from 'redux';
import Preloader from './components/Common/preloader/Preloader';

class App extends React.Component {

  componentDidMount () {
    this.props.initializeApp()
  };
    
  render() {
    if ( !this.props.initialized ) {
      return <Preloader />
    }

    return (
        <div className="app-wrapper">
          <HeaderContainer />
          <div className="siteBar">
            <NavMain />
          </div>
          <div className="main-content">
            <Route path="/profile/:userId?" render={()=><ProfileContainer />} />
            <Route path="/messages" render={()=><MessagesContainer />} /> 
            <Route path="/users" render={()=><UsersContainer />} /> 
            <Route path="/login" render={()=><Login />} /> 

            {/* <Route path="/new" component={News} /> 
            <Route path="/music" component={Music} /> 
            <Route path="/settings" component={Settings} />  */}
          </div>

        </div>
    )
  }
}

const mapStateToProps = ( state ) => ( {
  initialized: state.app.initialized,
} );

export default compose(
    withRouter,
    connect( mapStateToProps, { initializeApp, } ) )( App );