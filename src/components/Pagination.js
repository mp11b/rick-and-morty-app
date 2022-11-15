import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({info, setPageNumber}) {
    return(
        <ReactPaginate 
        className="pagination justify-content-center gap-3 my-3 mt-5"
        nextLabel="Next"
        nextClassName="btn btn-primary"
        previousLabel="Prev"
        previousClassName="btn btn-primary"
        pageClasses="page-item"
        pageLinkClassName="page-link"
        onPageChange={(data) => setPageNumber(data.selected + 1)}
        pageCount={info?.pages}/>
    );
}

export default Pagination;