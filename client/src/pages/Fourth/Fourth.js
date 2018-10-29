import React from "react";
import "./Fourth.css";
import { Cardy, Cardy4 } from "../../components/Card";
import Cal from "../../components/Cal";
import axios from "axios-jsonp-pro";
import { Calendar } from "fullcalendar";
import Button from "../../components/Button";
import { Icon } from "react-materialize";


class Fourth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meetups: [],
      liked: [1],
      button: false
    };
  }

  handleChange(id, event) {
    // With setState the current and previous states are merged.
    const { liked } = this.state;
    if (liked.length === 0) {
      this.setState({ liked: id, button: true });
    } else if (liked.length >= 1) {
      if (liked.includes(id)) {
        for (var i = 0; i < liked.length; i++) {
          if (liked[i] === id) {
            liked.splice(i, 1);
          }
        }
        this.calendar.getEventById(event.id).remove();

        this.setState({ liked: liked, button: false });
      } else {
        this.calendar.addEvent({
          id: event.id,
          title: event.name,
          start: "2018-10-28T14:30:00"
        });
        this.setState(prevState => ({
          liked: [...prevState.liked, id],
          button: true
        }));
      }
    }
  }

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
        {
          title: "My Event",
          start: "2018-10-28T14:30:00",
          allDay: false
        }
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
            <Cardy4 id="calendar">
              <div id="calendar"> </div>;
              </Cardy4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Fourth;
