import React from 'react';
import styles from './Pagination.module.css';

let Pagination  =  ( props ) => {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );

    let page = [ ];
    for ( let i = 1; i <= pagesCount; i++ ) {
        page.push( i );
    }

    return (
        <div>
            <div>
                { page.map( p => {
                    return <span className={ props.currentPage === p ? styles.selectedPage : '' }
                    onClick={ () => { props.onPageChanged(p); } } > { p } </span>
                } ) }
            </div>
        </div>
    )
};

export default Pagination;