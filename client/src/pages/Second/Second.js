import React from "react";
import "./Second.css";
import Collapsed from "../../components/Collapsible";
import { Cardy } from "../../components/Card";
import { Col, CardPanel } from "react-materialize";
import axios from "axios-jsonp-pro";

class Second extends React.Component {
  state = {
    activity: []
  };

  componentDidMount() {
    axios({
      method: "get",
      url: "http://localhost:5000/api/events"
    }).then(res => {
      const activity = res.data;
      this.setState({ activity });
      console.log(activity);
    });
  }

  renderMap(){
    
  }
  render() {
    return (
      <div className="container">
        <Collapsed
          adventure={this.state.activity.map((activity, index) => {
            if (activity.catagory === "Adventure") {
            return (
              <div className="col s6">
                <Cardy key={index} name={activity.name} />
              </div>
            )};
          })}
          dining={this.state.activity.map((activity, index) => {
            if (activity.catagory === "Dining") {
            return (
              <div className="col s6">
                <Cardy key={index} name={activity.name} />
              </div>
            )};
          })}
          entertainment={this.state.activity.map((activity, index) => {
            if (activity.catagory === "Entertainment") {
            return (
              <div className="col s6">
                <Cardy key={index} name={activity.name} />
              </div>
            )};
          })}
        />
      </div>
    );
  }
}
export default Second;
