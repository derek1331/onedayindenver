import React, { Component } from 'react';
import './App.css';
import Hello from "./components/Nav"
import Foot from "./components/Footer"
import Home from "./components/Home"




class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
 
        <Home />
        <Foot />

      </div>
    );
  }
}

export default App;
