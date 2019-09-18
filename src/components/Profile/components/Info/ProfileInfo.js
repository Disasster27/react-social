import React from 'react';
import I from './Info.module.css';
import Avatar from './componentsInfo/Avatar';
import ProfileStatus from './componentsInfo/ProfileStatus';

function ProfileInfo( props ) {
    // console.log(props);

    // if( !props.profile ) {
    //     return ( 
    //         <Preloader />
    //     )
    // };
    
    return (
        <div className={ I.info }>
            <Avatar photos={ props.profile ? props.profile.photos : undefined }/>
            <div className={ I.description }>
                <h3>Name</h3>
                <p>Date of Birth</p>
                <p>City</p>
            </div>
        </div>)
};

export default ProfileInfo;