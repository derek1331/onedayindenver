import React from "react";
import "./Third.css";
import { Cardy2 } from "../../components/Card";
import { Row, Input, Icon } from "react-materialize";
import axios from "axios-jsonp-pro";
import { LikeButton, SearchButton } from "../../components/Button";
import Map from "../../components/Map";

class Third extends React.Component {
  state = {
    meetups: [],
    query: new Date().toISOString().slice(0, 10)
  };

  runAxios() {
    axios
    .jsonp(
      `https://api.meetup.com/find/upcoming_events?&sign=tru&key=7d3c6c6011422e5e152c5d752564e77&photo-host=public&lon=-104.990&end_date_range=${
        this.state.query
      }T23:59:59&start_date_range=${
        this.state.query
      }T00:00:00&page=20&lat=39.739&order=time`
    )
    .then(res => {
      const meetups = res.data.events;
      this.setState({ meetups });
      console.log(res.data.events);
    });
  }

  componentDidMount() {
      this.runAxios()
  }

  renderMeetups = () => {
    let date = document.getElementById("date").value;
    console.log(date);
    if (date) {
      this.setState({
        query: date
      }, this.runAxios)
    } else {
      return
    }
  }
  

  renderClick = () => {
    let date = document.getElementById("date").value;
      if (date) {
        this.setState({
          query: date
        })
        console.log(date)
      }
  }

  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s6">
              {this.state.meetups.map((event, index) => {
                function doesExist() {
                  if (event.venue) {
                    return event.venue.name;
                  } else {
                    return "Not Available";
                  }
                }

                return (
                  <Cardy2
                    key={index}
                    style={{
                      padding: "24px",
                      borderTopColor: "#795548",
                      borderTopStyle: "solid",
                      borderTopWidth: "5px",
                      backgroundColor: "#fafafa"
                    }}
                    namecolor="teal-text"
                    name={event.name}
                    href={event.link}
                  >
                    <LikeButton />
                    <br />
                    <span> {`Time: ${event.local_time}`}</span>
                    <br />
                    <span>{`Loacation: ${doesExist()}`}</span>
                    <br />
                    <span>{`Day: ${event.local_date}`}</span>
                    <br />
                  </Cardy2>
                );
              })}
            </div>
            <div className="col s6 third-map">
              <span>Meetups in Denver!</span>
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="date" type="date" name="bday" />

                      {/* <input
                        placeholder="Category"
                        id="search-meetups"
                        type="text"
                        className="validate"
                      /> */}
                      <a
                        className="waves-effect waves-light btn"
                        onClick={this.renderMeetups}
                      >
                        Search
                      </a>
                    </div>
                  </div>
                </form>
              </div>
              <Map />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Third;
