import React from "react";
import "./Third.css";
import {Cardy2} from "../../components/Card";
import { Row, Input } from "react-materialize";
import axios from "axios-jsonp-pro";

class Third extends React.Component {
  state = {
    meetups: []
  };

  componentDidMount() {
    axios
      .jsonp(
        `https://api.meetup.com/find/upcoming_events?&key=7f4c736e302a5ef447a421877794f2d&sign=true&photo-host=public&lon=-104.9903&page=20&lat=39.7392`,
        {}
      )
      .then(res => {
        console.log(res)
        const meetups = res.data.events;
        this.setState({ meetups });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s6 center-align">
              {this.state.meetups.map(event => (
                <Cardy2
                  key={event.name}
                  color="teal"
                  description={event.local_time}
                  name={event.name}
                />
              ))}
            </div>
            <div className="col s6 center-align">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Third;
