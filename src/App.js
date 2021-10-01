import { render } from '@testing-library/react';
import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SerarchBox from './SearchBox';
import './App.css'

class App extends Component {
   
    constructor() {
        super()
        this.state = {
            robots : robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({ searchfield: event.target.value});
 
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
           return response.json()
        })
        .then(users =>{
            this.setState({robots : users})
        })

    }

    render(){

        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        console.log(filteredRobots)

        return(
            <div className='App-header'>
                <h1>Robot Friends</h1>
                <SerarchBox searchChange={this.onSearchChange}/>
                <br />
                <CardList robots={filteredRobots}/>
            </div>
        );

    }

}

export default App;