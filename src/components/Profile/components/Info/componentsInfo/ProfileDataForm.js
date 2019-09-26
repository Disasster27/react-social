import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input, Textarea } from '../../../../Common/FormsControls/FormsControls';
import style from '../../../../Common/FormsControls/FormsControls.module.css'



const ProfileDataForm = ( { profile, handleSubmit, error } ) => {
    
    return (
        <form onSubmit={ handleSubmit } >
            <div><button> SAVE </button></div>
            {
            error && <div className={ style.formError }>
               { error }
            </div> 
            }
            <div>
                <b>Full name:</b><Field placeholder={ "Full name" } 
                                        name={ "fullName" } 
                                        component={ Input } 
                                         validate={ [] }/>
            </div>
            <div>
                <b>About me:</b><Field placeholder={ "About Me" } 
                                        name={ "aboutMe" } 
                                        component={ Textarea } 
                                         validate={ [] }/> 
            </div>
            <div>
                <b>Job Description:</b><Field placeholder={ "Description" } 
                                        name={ "lookingForAJobDescription" } 
                                        component={ Textarea } 
                                         validate={ [] }/> 
            </div>
            <div>
                <b>Contacts:</b> { Object.keys( profile.contacts ).map( key => {
                    return (
                        <div key={ key } >
                            <b>{ key }:</b><Field placeholder={ key } 
                                            name={ "contacts." + key } 
                                            component={ Input } 
                                            validate={ [] }/>
                        </div>
                    )
                } ) }
            </div>
        </form>
    )
};

const ProfileDataFormReduxForm = reduxForm( { form: 'edit-profile' } )( ProfileDataForm )

export default ProfileDataFormReduxForm;