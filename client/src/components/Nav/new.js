import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo">
            One Day in Denver
          </a>
          <ul className="right hide-on-med-and-down">
            <NavLink
              exact to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              Home
            </NavLink>
          </ul>
          <ul className="right hide-on-med-and-down">
            <NavLink
              to="/second"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              Second
            </NavLink>
          </ul>
          <ul className="right hide-on-med-and-down">
            <NavLink
              to="/third"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              Third
            </NavLink>
          </ul>
          <ul className="right hide-on-med-and-down">
            <NavLink
              to="/fourth"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
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
