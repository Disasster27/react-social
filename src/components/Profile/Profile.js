import React from 'react';
import P from './Profile.module.css';
import MainImg from './components/Main_img/MainImg';
import ProfileInfo from './components/Info/ProfileInfo';
import PostContainer from './components/Posts/componentPost/Post_container';
// import ProfileStatus from './components/Info/componentsInfo/ProfileStatus';
import ProfileStatusWithHooks from './components/Info/componentsInfo/ProfileStatusWithHook';


function Profile( props ) {
    // console.log(props.updateStatus)
   
   return (
    <div className={ P.profile }>
        <MainImg />
        <div className={ P.profileMain }>
            <ProfileInfo  profile={ props.profile } isOwner={ props.isOwner } savePhoto={ props.savePhoto } saveProfile={ props.saveProfile }/>
            <ProfileStatusWithHooks status={ props.status } updateStatus={ props.updateStatus } />
            <PostContainer store={ props.store } />
        </div>
    </div>
   ) 
};

export default Profile;