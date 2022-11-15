import React from 'react';

function Title({title}) {

    return(
        <div className= "fs-3 ubuntu navbar-brand text-dark mt-5">
            <h1 className= "text-center">{title}</h1> 
        </div>
    );
}

export default Title;