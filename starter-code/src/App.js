import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {

  state = {
    actors: [...contacts].slice(0,5)
  }

  showActors = () => {
    let actorsList = [];
    for(let i = 0; i<this.state.actors.length; i++){
      actorsList.push(
      <li key={i}>
        <img className="actor-thumbnail" src={this.state.actors[i].pictureUrl} alt=""></img>
        {this.state.actors[i].name} 
        {this.state.actors[i].popularity}
      </li>
      )
    }
    return actorsList;
  }

  render() {
    //console.log(this.state.actors[0].name);
    return (
      <div className="App">
        <h1 className="App-title">Iron Contacts</h1>
          <>
            {this.showActors()}
          </>
      </div>
      
    );
  }
}

export default App;
