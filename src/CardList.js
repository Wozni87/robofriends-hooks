import React from 'react';
import { robots } from './robots';
import Card from './Card';

const CardList = (props) => {
    const cardComp = props.robots.map((user, i) => {
        return (
        <Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email} 
            />);
    })
    
    return(
        <div >
            {cardComp}
        </div>
    )
}

export default CardList;