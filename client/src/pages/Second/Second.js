import React from "react";
import "./Second.css";
import Collapsed from "../../components/Collapsible";
import { Cardy } from "../../components/Card";
import { Col, CardPanel, Icon } from "react-materialize";
import axios from "axios-jsonp-pro";

class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: [],
      liked: [1]
    };
  }

  handleChange(id, event) {
    const { liked } = this.state;

    if (liked.length >= 1) {
      if (liked.includes(id)) {
        for (var i = 0; i < liked.length; i++) {
          if (liked[i] === id) {
            liked.splice(i, 1);
          }
        }
        this.setState({ liked: liked });
        // if not found
      } else {
        this.setState(prevState => ({
          liked: [...prevState.liked, id]
        }));
      }
    }
  }

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

  renderMap() {}
  render() {
    return (
      <div className="container">
        <Collapsed
          adventure={this.state.activity.map((activity, index) => {
            const icon = this.state.liked.includes(activity._id) ? (
              <Icon small>star</Icon>
            ) : (
              <Icon small>star_border</Icon>
            );
            if (activity.catagory === "Adventure") {
              return (
                <div className="col s6">
                  <Cardy key={activity._id} name={activity.name}>
                    <a
                      id={activity._id}
                      className="right"
                      key={activity._id}
                      onClick={this.handleChange.bind(
                        this,
                        activity._id,
                        activity
                      )}
                    >
                      {icon}
                    </a>
                  </Cardy>
                </div>
              );
            }
          })}
          dining={this.state.activity.map((activity, index) => {
            const icon = this.state.liked.includes(activity._id) ? (
              <Icon small>star</Icon>
            ) : (
              <Icon small>star_border</Icon>
            );
            if (activity.catagory === "Dining") {
              return (
                <div className="col s6">
                  <Cardy key={activity._id} name={activity.name}>
                    <a
                      id={activity._id}
                      className="right"
                      key={activity._id}
                      onClick={this.handleChange.bind(
                        this,
                        activity._id,
                        activity
                      )}
                    >
                      {icon}
                    </a>
                  </Cardy>
                </div>
              );
            }
          })}
          entertainment={this.state.activity.map((activity, index) => {
            const icon = this.state.liked.includes(activity._id) ? (
              <Icon small>star</Icon>
            ) : (
              <Icon small>star_border</Icon>
            );
            if (activity.catagory === "Entertainment") {
              return (
                <div className="col s6">
                  <Cardy key={activity._id} name={activity.name}>
                    <a
                      id={activity._id}
                      className="right"
                      key={activity._id}
                      onClick={this.handleChange.bind(
                        this,
                        activity._id,
                        activity
                      )}
                    >
                      {icon}
                    </a>{" "}
                  </Cardy>
                </div>
              );
            }
          })}
        />
      </div>
    );
  }
}
export default Second;
