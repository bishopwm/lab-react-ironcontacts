import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {

  state = {
    actors: [...contacts].slice(0,5)
  }

  showActors = () => {
    let actorsList = [];
    for(let i = 0; i<this.state.actors.length; i++){
      actorsList.push(this.state.actors[i].name)
    }
    return actorsList;
  }

  render() {
    console.log(this.state.actors[0].name);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <>{this.showActors()}</>
      </div>
      
    );
  }
}

export default App;
