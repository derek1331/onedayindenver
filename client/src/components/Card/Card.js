import React from "react";
import "./Card.css";
import { Card, Col, CardPanel } from "react-materialize";

class Cardy extends React.Component {
  render() {
    return (
      <CardPanel className={this.props.color}>
        <div className="row">
          <div className="col s6">
            <span className={this.props.namecolor}>{this.props.name}</span>
            <br />

            {this.props.description}
          </div>
          <div className="col s6">
            {/* <button      onClick={() => { console.log("hello")}}><img
              className="right"
              src={this.props.image}
              style={{ width: "200px" }}
         
            /></button> */}
            {this.props.children}
          </div>
        </div>
      </CardPanel>
    );
  }
}

class Cardy2 extends React.Component {
  render() {
    return (
      <CardPanel className={this.props.class} style={this.props.style}>
        <div className="row">
          <div className="col s12">
            <a className={this.props.namecolor} href={this.props.href}>{this.props.name}</a>
            {this.props.children}

          </div>
        </div>
      </CardPanel>
    );
  }
}

class Cardy3 extends React.Component {
  render() {
    return (
      <Col m={6} s={12}>
        <Card
          className={this.props.color}
          textClassName="white-text"
          title="Card title"
          actions={[<a href="#">This is a link</a>]}
        >
          I am a very simple card.
        </Card>
      </Col>
    );
  }
}
export { Cardy, Cardy2, Cardy3 };
