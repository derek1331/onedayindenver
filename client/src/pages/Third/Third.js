import React from "react";
import "./Third.css";
import Cardy from "../../components/Card";
import { Row, Input } from "react-materialize";

class Third extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s6 center-align">
                <Cardy color="teal"/>
                <Cardy />
                <Cardy />
                <Cardy />

            </div>
            <div className="col s6 center-align">
                <Cardy />

            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default Third;
