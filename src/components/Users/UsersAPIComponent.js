import React from 'react'; 
import * as axios from 'axios';
import Users from './Users';

class UsersAPIComponent extends React.Component{
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount ( response.data.totalCount );});
    };

        // getUsers = () => {
    //     if ( this.props.users.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //         .then(response => {this.props.setUsers(response.data.items)});
    //     };
    // }

    onPageChanged = ( pageNumber ) => {
        this.props.setCurrentPage( pageNumber );
        axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${ pageNumber }&count=${ this.props.pageSize }` )
            .then( response => { 
                this.props.setUsers( response.data.items ); } );
    }
    
    render() {
        // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        // let page = [];
        // for (let i = 1; i <= pagesCount; i++) {
        //     page.push(i);
        // }

        return (

            <Users />

            // <div>
            //     <div>
            //         {page.map( p => {
            //             return <span className={ this.props.currentPage === p ? styles.selectedPage : '' }
            //             onClick={ () => { this.onPageChanged(p); } }> { p } </span>
            //         } )}
            //         {/* <span className={styles.selectedPage}> 1 </span>
            //         <span className={styles.selectedPage}> 2 </span>
            //         <span className={styles.selectedPage}> 3 </span>
            //         <span className={styles.selectedPage}> 4 </span>
            //         <span className={styles.selectedPage}> 5 </span> */}
            //     </div>
            //     {/* <button onClick={this.getUsers}>getUsers</button> */}
            //     {this.props.users.map( u => <div key={u.id}>
            //         <span>
            //             <div>
            //                 <img alt="Ava" src={ u.photos.small ? u.photos.small : "http://placehold.it/100"} className={styles.usersPhoto}></img>
            //             </div>
            //             <div>
            //                 { u.followed ? 
            //                     <button onClick={ () => {this.props.unfollow(u.id) } } >UNFOLLOW</button> : 
            //                     <button onClick={ () => {this.props.follow(u.id) } } >FOLLOW</button> }
                            
            //             </div>
            //         </span>
            //         <span>
            //             <span>
            //                 <div>{u.name}</div>
            //                 <div>{u.status}</div>
            //             </span>
            //             <span>
            //                 <div>{"u.location.city"}</div>
            //                 <div>{"u.location.country"}</div>
            //             </span>
            //         </span>
            //     </div>)}
            // </div>
        )
    };
};

export default UsersAPIComponent;