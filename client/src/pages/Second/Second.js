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
                    <CardPanel>
        <div className="row">
          <div className="col s6">
            <span style={{color: "black", fontSize: 15, fontStyle: "bold" }}>{activity.name }</span>
            <br></br>
            DESCRIPTION:
            <span style={{color: "black", fontSize: 10 }}> {activity.description}</span>
            <br />
            ADVICE:
            <span style={{color: "black", fontSize: 10 }}> {activity.advice}</span>
            
            
            
          </div>
          <div className="col s6">
          <span></span>
          <img style={{width:150, height:150}} src={activity.img}></img>
          </div>
        </div>
      </CardPanel>
            </div>
            )};
          })}
          dining={this.state.activity.map((activity, index) => {
            if (activity.catagory === "Dining") {
            return (
              <div className="col s6">
              <CardPanel>
  <div className="row">
    <div className="col s6">
      <span style={{color: "black", fontSize: 15, fontStyle: "bold" }}>{activity.name }</span>
      <br></br>
      DESCRIPTION:
      <span style={{color: "black", fontSize: 10 }}> {activity.description}</span>
      <br />
      ADVICE:
      <span style={{color: "black", fontSize: 10 }}> {activity.advice}</span>
      
      
      
    </div>
    <div className="col s6">
    <span></span>
    <img style={{width:150, height:150}} src={activity.img}></img>
    </div>
  </div>
</CardPanel>
      </div>
      )};
    })}
          entertainment={this.state.activity.map((activity, index) => {
            if (activity.catagory === "Entertainment") {
            return (
              <div className="col s6">
              <CardPanel>
  <div className="row">
    <div className="col s6">
      <span style={{color: "black", fontSize: 15, fontStyle: "bold" }}>{activity.name }</span>
      <br></br>
      DESCRIPTION:
      <span style={{color: "black", fontSize: 10 }}> {activity.description}</span>
      <br />
      ADVICE:
      <span style={{color: "black", fontSize: 10 }}> {activity.advice}</span>
      
      
      
    </div>
    <div className="col s6">
    <span></span>
    <img style={{width:150, height:150}} src={activity.img}></img>
    </div>
  </div>
</CardPanel>
      </div>
      )};
    })}
        />
      </div>
    );
  }
}
export default Second;
