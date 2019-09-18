import React from 'react';
import P from './Profile.module.css';
import MainImg from './components/Main_img/MainImg';
import ProfileInfo from './components/Info/ProfileInfo';
import PostContainer from './components/Posts/componentPost/Post_container';
import ProfileStatus from './components/Info/componentsInfo/ProfileStatus';


function Profile( props ) {
    // debugger
   
   return (
    <div className={ P.profile }>
        <MainImg />
        <div className={ P.profileMain }>
            <ProfileInfo  profile={ props.profile }/>
            <ProfileStatus status={ props.status } updateStatus={ props.updateStatus } />
            <PostContainer store={ props.store } />
        </div>
    </div>
   ) 
};

export default Profile;