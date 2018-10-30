import React from "react";
import "./Footer.css";
import { Footer } from "react-materialize";

class Foot extends React.Component {
  render() {
    return (
      <Footer
        copyrights="2018 Copyright 1DAYINDENVER"
        moreLinks={
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        }
        links={
          <ul>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Link 1
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Link 2
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Link 3
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Link 4
              </a>
            </li>
          </ul>
        }
        className="teal"
      >
        <h5 className="white-text">A Day In Denver</h5>
        <p className="grey-text text-lighten-4">
        One Day In Denver is the one stop app for exploring Denver!
        </p>
      </Footer>
    );
  }
}
export default Foot;
