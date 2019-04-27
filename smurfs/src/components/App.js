import React, { Component } from 'react';
import Smurfs from './Smurfs';
import './App.css';
import SmurfForm from './SmurfForm';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1> Welcome To Smurf Village! </h1>
      <SmurfForm />
        <Smurfs />
      </div>
    );
  }
}

export default App;
