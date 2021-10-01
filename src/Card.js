import React from 'react';

const Card = ({id, name, email}) =>
{
    let robot_url = 'https://robohash.org/' + id + '?200x200'
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow5'>
            <img  alt="robots" src={robot_url} />
            <div>
                <h2> {name} </h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;