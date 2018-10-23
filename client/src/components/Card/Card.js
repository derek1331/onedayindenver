import React from "react";
import "./Card.css";
import { Card, Col, CardPanel } from "react-materialize";

class Cardy extends React.Component {
  render() {
    return (
      
        <CardPanel className={this.props.color}>
          <div className="row">
            <div className="col s6">
              <span>{this.props.activityName}</span>
              <br/>

              {this.props.actvityDescription}
            </div>
            <div className="col s6">
              <img
                className="right"
                src={this.props.activiyImage}
                style={{ width: "200px" }}
              />
            </div>
          </div>
        </CardPanel>
      
    );
  }
}
export default Cardy;
