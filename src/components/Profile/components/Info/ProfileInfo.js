import React from 'react';
import I from './Info.module.css';
import Avatar from './componentsInfo/Avatar';

function ProfileInfo( props ) {

    const onMaimPhotoSelected = ( e ) => {
        if ( e.target.files.length > 0 ) {
            props.savePhoto( e.target.files[0] );
        }
    }

    return (
        <div className={ I.info }>
            <Avatar photos={ props.profile ? props.profile.photos : undefined }/>
            { props.isOwner && <input type={ "file" } onChange={ onMaimPhotoSelected } /> }
            <div className={ I.description }>
                <h3>Name</h3>
                <p>Date of Birth</p>
                <p>City</p>
            </div>
        </div>)
};

export default ProfileInfo;