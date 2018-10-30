import React from "react";
import "./Home.css";
import { Parallax } from "react-materialize";
import TestModal from "../../components/Modal"


class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="home-header">
          <div className="section">
            <br />
            <br />
            <h1 className="header center teal-text text-lighten-2">
              A Day In Denver
            </h1>
            <div className="row center">
              <h5 className="header col s12 light white-text">
                One Day In Denver is the one stop app for exploring Denver!
              </h5>
            </div>
            <div className="row center">
            <TestModal />
              {/* <a
                href="http://materializecss.com/getting-started.html"
                id="download-button"
                className="btn-large waves-effect waves-light teal lighten-1"
              >
                Sign up | Login
              </a> */}
            </div>
            <br />
            <br />
          </div>
        </div>
        <Parallax imageSrc="http://www.cpr.org/sites/default/files/styles/full-width/public/images/stockshowparade3.jpg?itok=D1cuHJeg" />

        <div className="container">
          <div className="section">
            {/*   Icon Section   */}
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text">
                  Adventure
                    {/* <i className="material-icons">Adventure</i> */}
                  </h2>
                  <h5 className="center">Exciting Experiences</h5>
                  <p className="light">
                  Fly fishing, exploring, skydiving, mountain climbing, kayaking, mountain biking, skiing, snowboarding, hiking, river rafting or participating in extreme sports.
                  </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text">
                  Dining
                    {/* <i className="material-icons">Dining</i> */}
                  </h2>
                  <h5 className="center">Eats and Drinks</h5>
                  <p className="light">
                  In Denver, one can eat incredibly well across many cuisines, enjoy beer from a not-so-secret beer scene to fantastic craft spirits and a booming roster of restaurants that take influences from the far reaches of the globe, there's a little bit of everything in the Mile High City.
                  </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text">
                  Experiences
                    {/* <i className="material-icons">Experiences</i> */}
                  </h2>
                  <h5 className="center">Event or Occurance</h5>
                  <p className="light">
                  Top-rated events from beer tours, concerts, museums, parks, canibus tours, outdoor concerts, sporting events, opera, casinos, symphony, theatre, and jazz. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Parallax imageSrc="images\maroonbells.jpg"/>

        {/* <div className="container">
          <div className="row center">
            <h5 className="header col s12 light">
              A modern responsive front-end framework based on Material Design
            </h5>
          </div>
        </div> */}
        <div className="container">
          <div className="section">
            {/* <img src="http://www.cpr.org/sites/default/files/styles/full-width/public/images/stockshowparade3.jpg?itok=D1cuHJeg"> */}
            <div className="row">
              <div className="col s12 center">
                <h3>
                  <i className="mdi-content-send brown-text" />
                </h3>
                <h4>Contact Us</h4>
                <p className="left-align light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam scelerisque id nunc nec volutpat. Etiam pellentesque
                  tristique arcu, non consequat magna fermentum ac. Cras ut
                  ultricies eros. Maecenas eros justo, ullamcorper a sapien id,
                  viverra ultrices eros. Morbi sem neque, posuere et pretium
                  eget, bibendum sollicitudin lacus. Aliquam eleifend
                  sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet
                  semper molestie. Morbi massa odio, condimentum sed ipsum ac,
                  gravida ultrices erat. Nullam eget dignissim mauris, non
                  tristique erat. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia Curae;
                </p>
              </div>
            </div>
          </div>
        </div>
        <Parallax imageSrc="images\skylinenight.jpg"/>
        {/* <div className="container">
          <div className="row center">
            <h5 className="header col s12 light">
              A modern responsive front-end framework based on Material Design
            </h5>
          </div>
        </div> */}
      </div>
    );
  }
}
export default Home;
