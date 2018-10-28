import React from "react";
import "./Third.css";
import { Cardy2 } from "../../components/Card";
import { Row, Input, Icon } from "react-materialize";
import axios from "axios-jsonp-pro";
import Button from "../../components/Button";

class Third extends React.Component {
  state = {
    meetups: []
    // favorite: this.meetups.map((element) => false)
  };

  componentDidMount() {
    axios
      .jsonp(
        `https://api.meetup.com/find/upcoming_events?&sign=tru&key=7f4c736e302a5ef447a421877794f2d&photo-host=public&lon=-104.990&end_date_range=2018-10-25T23:59:59&start_date_range=2018-10-25T00:00:00&page=20&lat=39.739&order=time`
      )
      .then(res => {
        const meetups = res.data.events;
        this.setState({ meetups });
        console.log(res.data.events);
      });
  }

  // renderUnfavorite = () => {
  //   return (
  //     <a className="right" onClick={this.state.favorite===event.id}>
  //       <Icon small>star_border</Icon>
  //     </a>
  //   );
  // };
  // renderFavorite = () => {
  //   return (
  //     <a className="right" onClick={this.state.favorite}>
  //       <Icon small>star</Icon>
  //     </a>
  //   );
  // };
  favorite(index) {
    const newFavorite = [...this.state.favorite];
    newFavorite[index] = !this.state.favorite[index];
    this.setState({ favorite: newFavorite });
  }

  // let jasper = Object.assign({}, this.state.favorite);    //creating copy of object
  // jasper = !this.state.favorite;                        //updating value
  // this.setState({jasper});

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
                    {/* this.state.favorite
                      ?       <a className="right" onClick={this.state.favorite}>
                      <Icon small>star</Icon>
                    </a> */}
                    <Button />
                    {/* {this.state.favorite ? (
                    <a className="right" onClick={this.changeFavorite}>
                        <Icon small>star</Icon>
                      </a>
                    ) : (
                      <a className="right" onClick={this.changeFavorite}>
                        <Icon small>star_border</Icon>
                      </a>
                    )} */}
                    {/* {this.changeFavorite(index)} */}
                    <br />
                    <span> {`Time: ${event.local_time}`}</span>
                    <br />
                    <span>{`Loacation: ${doesExist()}`}</span>
                    <br />
                    <br />
                  </Cardy2>
                );
              })}
            </div>
            <div className="col s6 center-align" />
          </div>
        </div>
      </div>
    );
  }
}
export default Third;
