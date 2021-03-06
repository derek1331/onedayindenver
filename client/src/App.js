import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Foot from "./components/Footer";
import Home from "./pages/Home";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Fourth from "./pages/Fourth";
import TestModal from "./components/Modal";
import Collapsed from './components/Collapsible';
import Testing from "./pages/Testing";
import Map from "./pages/Map";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/second" component={Second} />
              <Route exact path="/third" component={Third} />
              <Route exact path="/fourth" component={Fourth} />
              <Route exact path="/testing" component={Testing} />
              <Route exact path="/map" component={Map} />
            </Switch>
          </main>
          <Foot />
        </div>
      </Router>
    );
  }
}
export default App;
