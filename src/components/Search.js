import React from 'react';

function Search({searchText, setSearchText, setPageNumber}) {

    const handleInput = ({target}) =>{
        setSearchText(target.value);
        setPageNumber(1);
    }

    return(
        <div className="container mt-5">
            <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                onChange={handleInput}
				value={searchText}
                />       
        </div>
    );
}

export default Search;