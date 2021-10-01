import React from "react";

const SerarchBox = ({ searchfield, searchChange}) =>
{
    return(
        <div className='pa2'>
            <input type='search' placeholder='search Robots' onChange={searchChange}/>
        </div>

    );
}

export default SerarchBox