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
      )}
    return <tbody className="actors-table">{actorsList}</tbody>;
  }

  addRandom = () => {
    this.setState({
      actors: [...this.state.actors, [...contacts][Math.floor(Math.random()*100)]]
    })
  }

  sortAlpha = () => {
    console.log("Sorting")
    let alphaSorted = [...this.state.actors].sort(function(a,b){
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      return 0;
    })
    this.setState({
      actors: alphaSorted
    })
  }

  render() {

    return (
      <div className="App">
        <h1 className="App-title">Iron Contacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortAlpha}>Sort Alphabetically</button>
        <table>
          <tbody>
            <tr>
              <td><strong>Picture</strong></td>
              <td><strong>Name</strong></td>
              <td><strong>Popularity</strong></td>
            </tr>
          </tbody>
          {this.showActors()}
        </table>
      </div>
      
    );
  }
}

export default App;
