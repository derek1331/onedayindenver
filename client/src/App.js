import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Secondpage from "./pages/Secondpage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/secondpage" component={Secondpage} />
          </Switch>
            </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
