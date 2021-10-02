import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SerarchBox from './SearchBox';
import './App.css'

function App () {
   
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearch] = useState('');

    
    const searchChange = (event) => { setSearch(event.target.value)};

    useEffect(() =>
    {fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{return response.json()})
    .then(users =>{setRobots(users)});
    console.log('useEffect called');
    }, []);

    
    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })

    return(
        <div className='App-header'>
            <h1>Robot Friends</h1>
            <SerarchBox searchChange={searchChange}/>
            <br />
            <CardList robots={filteredRobots}/>
        </div>
    );
}

export default App