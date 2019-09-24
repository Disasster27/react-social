import React, { useState } from 'react';
import styles from './Pagination.module.css';

let Pagination  =  ( { portionSize = 10, ...props } ) => {

    let pagesCount = Math.ceil( props.totalItemsCount / props.pageSize );

    let pages = [ ];
    for ( let i = 1; i <= pagesCount; i++ ) {
        pages.push( i );
    }

    let portionCount = Math.ceil( pagesCount / portionSize );    
    let [portionNumber, setPortionNumber ] = useState( 1 );
    let leftPortionPageNumber = ( portionNumber - 1 ) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize ;
    return (
        <div className={ styles.pagination }>
            { portionNumber > 1 &&
            <button className={ styles.paginationButton } onClick={ () => { setPortionNumber( portionNumber - 1 ) } } >{`<PREV`}</button>}
            <div className={ styles.paginationPortion }>
                { pages
                    .filter( p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map( p => {
                        return <span className={ props.currentPage === p ? styles.selectedPage : '' }
                                        onClick={ () => { props.onPageChanged(p); } } > { p } </span>
                } ) }
            </div>
            { portionCount > portionNumber &&
            <button className={ styles.paginationButton } onClick={ () => { setPortionNumber( portionNumber + 1 ) } } >{`NEXST>`}</button>}
        </div>
    )
    
};

export default Pagination;