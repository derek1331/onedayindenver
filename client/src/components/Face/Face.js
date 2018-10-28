import React from "react"
import { Icon } from "react-materialize"
import {Cardy} from "../../components/Card"
import axios from "axios-jsonp-pro"
import { Calendar } from "fullcalendar";




class Face extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      meetups: []
    };
    this.handleClick = this.handleClick.bind(this);
  } 
  
  handleClick() {
    this.setState({
      liked: !this.state.liked
    });
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
        {
          title: "My Event",
          start: "2018-10-27T14:30:00",
          allDay: false
        }
        // other events here...
      ]
    });

    this.calendar.render();
  }
  
  
  render() {
    return (
      <div>
        <div className="section">
          <div className="row">
            <div className="col s6">
              {this.state.meetups.map((event, index) => {
                      const icon = this.state.liked ? <Icon small>star</Icon>: <Icon small>star_border</Icon>;

                // var ho = function() {
                //   if(this.state.meetups.liked === event.id) {
                //    return <Icon small>star</Icon>
                //   } else {
                //     return <Icon small>star_border</Icon>
                //   }
                // }

                return (
                  
                  <Cardy
                    key={index}
                    color="white"
                    name={event.name}
                    namecolor="teal-text"
                    description="fun"
                    // image="https://www.travelwyoming.com/sites/default/files/uploads/consumer/7-18_MedicineBowHikingFishing_KL_0708_3298.jpg"
                  >
          <a className="right" onClick={this.handleClick}> 
            {icon}
          </a>
        
                  </Cardy>
                )})}
            <div className="col s6 center">
              <div id="calendar"> </div>;
            </div>
        </div>
        </div>
        </div>
        </div>
        
    );
  }
}

export default Face;