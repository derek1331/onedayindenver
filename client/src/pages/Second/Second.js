import React from "react";
import "./Second.css";
import { Cardy } from "../../components/Card";
import Collapsed from "../../components/Collapsible";
import axios from "axios-jsonp-pro"
class Second extends React.Component {
  componentDidMount() {
    axios({
      method:'get',
      baseURL:"http://localhost:5000/api/",
      url:'http://localhost:5000/api/events',
    })
      .then(function(res) {
        // const meetups = res.data.events;
        // this.setState({ meetups });
        console.log(res);
    });
  }
  render() {
    return (
      <div className="container">
        <Collapsed />
      </div>
    );
  }
}
export default Second;
