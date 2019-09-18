import * as axios from 'axios';


const instance = axios.create ( {
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY" : "5705cc87-7818-44c2-9772-322f75009900"},
})

export const usersAPI = {
    getUsers( currentPage = 1, pageSize = 10 ) {
        return (
            instance.get( `users?page=${ currentPage }&count=${ pageSize }` ).then( response => response.data )
        )
    },
    follow( userId ) {
        return ( instance.post( `follow/${ userId }` ) )
    },
    unfollow( userId ) {
        return ( instance.delete( `follow/${ userId }` ) )
    },
    getProfile( userId ) {
        return (
            profileAPI.getProfile( userId )
        )
    },
};

export const profileAPI = {
    
    getProfile( userId ) {
        return (
            instance.get(`profile/${ userId }` )
        )
    },
    getStatus( userId ) {
        return (
            instance.get(`profile/status/${ userId }` )
        )
    },
    updateStatus( status ) {
        return (
            instance.put(`profile/status`, { status } )
        )
    }
};

export const authAPI = {
   me() {
       return ( 
        instance.get( `auth/me` )
       )
   }
};
