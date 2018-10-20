import React from "react";
import "./Card.css";
import { Card, Col } from "react-materialize";

class Cardy extends React.Component {
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
export default Cardy;
