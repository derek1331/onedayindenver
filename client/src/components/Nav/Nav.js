import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="white" role="navigation">
          <div className="nav-wrapper container">
            <ul id="logo-container" href="#" className="brand-logo black-text">
              <NavLink
                exact
                to="/"
                style={{ color: "#795548",
                fontWeight: "bold", }}
              >
                OneDay in Denver
              </NavLink>
            </ul>
            <ul className="right hide-on-med-and-down">
              <NavLink
                exact
                to="/"
                style={{ color: "#795548",
                fontWeight: "bold",}}
                activeStyle={{
                 
                  textDecoration: "underline #795548 solid"
                }}
              >
                Home
              </NavLink>
            </ul>
            <ul className="right hide-on-med-and-down">
              <NavLink
                to="/second"
                style={{ color: "#795548", fontWeight: "bold", }}
                activeStyle={{
                  textDecoration: "underline #795548 solid",
                }}
              >
                Second
              </NavLink>
            </ul>
            <ul className="right hide-on-med-and-down">
              <NavLink
                to="/third"
                style={{ color: "#795548",
                fontWeight: "bold", }}
                activeStyle={{
                  textDecoration: "underline #795548 solid",

                }}
              >
                Third
              </NavLink>
            </ul>
            <ul className="right hide-on-med-and-down">
              <NavLink
                to="/fourth"
                style={{ color: "#795548",
                fontWeight: "bold", }}
                activeStyle={{
                  textDecoration: "underline #795548 solid",
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
      </div>
    );
  }
}

export default Nav;
