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
      <tr className="actors-table-row" key={i}>
        <td><img className="actor-thumbnail" src={this.state.actors[i].pictureUrl} alt=""></img></td>
        <td>{this.state.actors[i].name}</td>    
        <td>{this.state.actors[i].popularity}</td>
      </tr>
      )
    }
    return <tbody className="actors-table">{actorsList}</tbody>;
  }

  render() {
    //console.log(this.state.actors[0].name);
    return (
      <div className="App">
        <h1 className="App-title">Iron Contacts</h1>
        <table>
            {this.showActors()}
        </table>
      </div>
      
    );
  }
}

export default App;
