import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../Common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../State/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from '../Common/FormsControls/FormsControls.module.css'




const LoginForm = ( props ) => {

    return (
        
        <form onSubmit={ props.handleSubmit } >
            <div>
                <Field placeholder={ "E-mail" } name={ "email" } component={ Input } validate={ [required] }/>
            </div>
            <div>
                <Field placeholder={ "Password" } name={ "password" } component={ Input } validate={ [required] } type={ "password" }/>
            </div>
            <div>
                <Field type={ "checkbox" } name={ "rememberMe" } component={ Input } />
            </div>
            {
            props.error && <div className={ style.formError }>
               { props.error }
            </div> 
            }
            <div>
                <button>LOGIN</button>
            </div>
        </form>
        
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})( LoginForm );

const Login = ( props ) => {
    const onSubmit = ( formData ) => {
        props.login( formData.email, formData.password, formData.rememberMe )
    }

    if( props.isAuth ) {
        return <Redirect to={ "/profile" } />
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={ onSubmit } />
        </div>
    )
};

const mapStateToProps = ( state ) => ({
    isAuth: state.auth.isAuth,
} );

export default connect( mapStateToProps, { login } )( Login );