import React, { useState } from 'react';
import I from './Info.module.css';
import Avatar from './componentsInfo/Avatar';
import Preloader from '../../../Common/preloader/Preloader';
import ProfileDataFormReduxForm from './componentsInfo/ProfileDataForm';

function ProfileInfo( props ) {

    let [ editMode, setEditMode ] = useState( false )

    if ( !props.profile ) {
        return <Preloader />
    }

    const onMaimPhotoSelected = ( e ) => {
        if ( e.target.files.length > 0 ) {
            props.savePhoto( e.target.files[0] );
        }
    }

    const onSubmit = ( formData ) => {
        props.saveProfile( formData ).then(
            () => {
                setEditMode( false );
            }
        );
    }

    return (
        <div className={ I.info }>
            <Avatar photos={ props.profile ? props.profile.photos : undefined }/>

            { props.isOwner && <input type={ "file" } onChange={ onMaimPhotoSelected } /> }

            { editMode 
                ? <ProfileDataFormReduxForm initialValues={ props.profile } profile={ props.profile } onSubmit={ onSubmit }/> 
                : <ProfileData toEditMode={ () => { setEditMode( true ) } } profile={ props.profile } isOwner={ props.isOwner } /> } 
        </div>)
};

const ProfileData = ( { profile, isOwner, toEditMode } ) => {
    return (
        <div>
            { isOwner && <div><button onClick={ toEditMode }>EDIT</button></div> }
            <div>
                <b>FullName:</b> { profile.fullName }
            </div>
            <div>
                <b>About me:</b> { profile.aboutMe }
            </div>
            <div>
                <b>Job Description:</b> { profile.lookingForAJobDescription }
            </div>
            <div>
                <b>Contacts:</b> { Object.keys( profile.contacts ).map( key => {
                    return <Contact key={ key } contactTitle={ key } contactValue={ profile.contacts[key] }/>
                } ) }
            </div>
        </div>
    )
};

const Contact = ( { contactTitle, contactValue } ) => {
    return (
        <div>
            <b>{ contactTitle }:</b> { contactValue }
        </div>
    )
};

export default ProfileInfo;