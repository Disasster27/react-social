import React from 'react';
import H from './Header.module.css';
import {NavLink} from 'react-router-dom';

function Header(props) {
   return (
    <header className={H.header}>
        <img src="http://placehold.it/50" className={H.logo} alt="Logo"></img>
        <div className={ H.loginBlock }>
            { props.isAuth 
                ? <div>{ props.login } <button className={ H.btn } onClick={ props.logout }>LOGOUT</button> </div>
                : <NavLink to={ '/login' }>LOGIN</NavLink> }
        </div>
    </header>
   ) 
};

export default Header;