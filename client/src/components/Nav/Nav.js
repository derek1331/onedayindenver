import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo black-text">
            OneDay in Denver
          </a>
          <ul className="right hide-on-med-and-down">
            <NavLink
              exact to="/"
              style={{color: "brown"}}
              activeStyle={{
                fontWeight: "bold",
                color: "teal"
              }}
            >
              Home
            </NavLink>
          </ul>
          <ul className="right hide-on-med-and-down">
            <NavLink
              to="/second"
              style={{color: "brown"}}
              activeStyle={{
                fontWeight: "bold",
                color: "teal"
              }}
            >
              Second
            </NavLink>
          </ul>
          <ul className="right hide-on-med-and-down">
            <NavLink
              to="/third"
              style={{color: "brown"}}
              activeStyle={{
                fontWeight: "bold",
                color: "teal"
              }}
            >
              Third
            </NavLink>
          </ul>
          <ul className="right hide-on-med-and-down">
            <NavLink
              to="/fourth"
              style={{color: "brown"}}
              activeStyle={{
                fontWeight: "bold",
                color: "teal"
              }}
            >
              Fourth
            </NavLink>
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

export default Nav;
