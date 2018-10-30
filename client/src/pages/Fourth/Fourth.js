import React from "react";
import "./Fourth.css";
import { Cardy, Cardy4 } from "../../components/Card";
import Cal from "../../components/Cal";
import axios from "axios-jsonp-pro";
import { Calendar } from "fullcalendar";
import Button from "../../components/Button";
import { Icon } from "react-materialize";
// import Map from "../../components/Map";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class Fourth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meetups: [],
      liked: [1],
      button: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapstuff: []
    };
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  windowHasClosed = props => {
    this.setState({
      showingInfoWindow: false
    });
  };

  handleChange(id, event,) {
    // With setState the current and previous states are merged.
    const { liked, mapstuff } = this.state;
    const map = {name: event.name,
                  lat: event.venue ? event.venue.lat : "",
                  lng: event.venue ? event.venue.lon : "",
                id: event.id};
    if (liked.length === 0) {
      this.setState({ liked: id, button: true });
      // if found
    } else if (liked.length >= 1) {
      if (liked.includes(id)) {
        for (var i = 0; i < liked.length; i++) {
          if (liked[i] === id) {
            liked.splice(i, 1);
          }
        }
        for (var j = 0; j < mapstuff.length; i++) {
          if (mapstuff[j].id === id) {
            mapstuff.splice(j, 1);
          }
        }
        this.calendar.getEventById(event.id).remove();

        this.setState({ liked: liked, button: false });
        // if not found
      } else {
        this.calendar.addEvent({
          id: event.id,
          title: event.name,
          start: `${event.local_date}T${event.local_time}`
        });
        this.setState(prevState => ({
          liked: [...prevState.liked, id],
          button: true,
          mapstuff: [...prevState.mapstuff, map]
        }));
      }
    }
  }

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

    var calendarEl = document.getElementById("calendar"); // grab element reference

    this.calendar = new Calendar(calendarEl, {
      // put your options and callbacks here
      defaultView: "listDay",
      allDaySlot: false,
      nowIndicator: true,
      buttonText: {
        today: "today",
        month: "month",
        week: "week",
        day: "day",
        list: "list"
      },
      columnHeader: false,
      events: [
        // other events here...
      ]
    });

    this.calendar.render();
  }

  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s6">
              {this.state.meetups.map((event, index) => {
                const icon = this.state.liked.includes(event.id) ? (
                  <Icon small>star</Icon>
                ) : (
                  <Icon small>star_border</Icon>
                );
                return (
                  <Cardy
                    key={index}
                    color="white"
                    name={event.name}
                    namecolor="teal-text"
                    description="fun"
                    // image="https://www.travelwyoming.com/sites/default/files/uploads/consumer/7-18_MedicineBowHikingFishing_KL_0708_3298.jpg"
                  >
                    <a
                      id={event.id}
                      className="right"
                      key={event.id}
                      onClick={this.handleChange.bind(this, event.id, event)}
                    >
                      {icon}
                    </a>
                  </Cardy>
                );
              })}
            </div>
            <div className="col s6 center">
              <Cardy4>
                <div id="calendar"> </div>
              </Cardy4>
              <Map
                google={this.props.google}
                zoom={14}
                initialCenter={{ lat: 39.739, lng: -104.99 }}
                style={{ width: "500px", height: "500px" }}
              >
                {this.state.mapstuff.map((event, index) => {
                  return (
                    <Marker
                      key={event.id}
                      onClick={this.onMarkerClick}
                      name={event.name}
                      position={{lat: event.lat, lng: event.lng}}
                    />
                  );
                })}

                <InfoWindow
                  onOpen={this.windowHasOpened}
                  onClose={this.windowHasClosed}
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}
                >
                  <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                  </div>
                </InfoWindow>
              </Map>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBhNoh-8XLeci7x7IWHfIGXuxcp1djJfq8"
})(Fourth);
