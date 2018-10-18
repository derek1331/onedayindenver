import React from "react";
import "./Nav.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Header extends React.Component {
  render() {
      return (
        <nav className="white" role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container" href="#" className="brand-logo">
              OneDay in Denver
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="#">Navbar Link</a>
              </li>
            </ul>

            <ul id="nav-mobile" className="sidenav">
              <li>
                <a href="#">Navbar Link</a>
              </li>
            </ul>
            <a href="#" data-target="nav-mobile" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>
      );
    }
  }


export default Header;
