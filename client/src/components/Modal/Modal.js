import React from "react";
import "./Modal.css";
import { Row, Input, Modal, Button, Icon } from "react-materialize";
import axios from "axios-jsonp-pro";
import { Redirect } from "react-router";

class TestModal extends React.Component {
  state = {
    username: "",
    password: "",
    redirectTo: null,
    login: true
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("sign-up-form, email: ");
    console.log(this.state.username);
    //request to server here
    axios
      .post("http://localhost:5000/api/users", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        if (response.data) {
          console.log("successful signup");
          this.setState({
            redirectTo: "/second"
          });
        } else {
          console.log("Sign-up error");
        }
      })
      .catch(error => {
        console.log("Sign up server error");
        console.log(error);
      });
  };
  handleSign = () => {
    this.setState({
      login: false
    });
  };

  handleLo = () => {
    this.setState({
      login: true
    });
  };
  handleLogin = event => {
    event.preventDefault();
    console.log("handleLogin");
    //request to server here
    axios
      .post("http://localhost:5000/api/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // this.props.updateUser({
          //   loggedIn: true,
          //   email: response.date.username
          // });
          this.setState({
            redirectTo: "/fourth"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  };

  handleChange = event => {
    console.log(event.target.name);

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    }
    const icon = this.state.login ? (
      <Row>

        <Input
          type="email"
          name="username"
          label="Poop"
          s={12}
          value={this.state.username}
          onChange={this.handleChange}
        />
        <Input
          type="password"
          name="password"
          label="password"
          s={12}
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.handleLogin}>Log In</button>
      </Row>
    ) : (
      <Row>
        <p>Sign Up</p>
        <input
          type="email"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.handleSubmit}>Sign Up</button>
      </Row>
    );
    return (
      <Modal
        header="1 Day In Denver"
        trigger={<Button>Sign Up | Login </Button>}
      >
        {icon}
        <button onClick={this.handleLo}>Login</button>
        <button onClick={this.handleSign}>Signup</button>
        
        <div className="navbutton">{this.props.children}</div>
      </Modal>
    );
  }
}
export default TestModal;
