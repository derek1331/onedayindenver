import React from "react";
import "./Collapse.css"
import {Collapsible, CollapsibleItem, Row, Col, CardPanel} from "react-materialize"

const Collapsed = () => (
 <div>
  <Collapsible popout defaultActiveKey={10}>
  
  <CollapsibleItem header='Adventure' icon='filter_drama'>
 
<Row>
    <Col s={12} m={4}>
        <CardPanel className="teal lighten-4 black-text">
            <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
        </CardPanel>
    </Col>

      <Col s={12} m={4}>
        <CardPanel className="teal lighten-4 black-text">
            <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
        </CardPanel>
    </Col>

        <Col s={12} m={4}>
        <CardPanel className="teal lighten-4 black-text">
            <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
        </CardPanel>
    </Col>
  
</Row>

  </CollapsibleItem>
  <CollapsibleItem header='Dining' icon='place'>
  <Row>
    <Col s={12} m={4}>
        <CardPanel className="teal lighten-4 black-text">
            <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
        </CardPanel>
    </Col>

      <Col s={12} m={4}>
        <CardPanel className="teal lighten-4 black-text">
            <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
        </CardPanel>
    </Col>

        <Col s={12} m={4}>
        <CardPanel className="teal lighten-4 black-text">
            <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
        </CardPanel>
    </Col>
  
</Row>
  </CollapsibleItem>
  <CollapsibleItem header='Experience' icon='whatshot'>
  <Row>
    <Col s={12} m={4}>
        <CardPanel className="teal lighten-4 black-text">
            <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
        </CardPanel>
    </Col>

      <Col s={12} m={4}>
        <CardPanel className="teal lighten-4 black-text">
            <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
        </CardPanel>
    </Col>

        <Col s={12} m={4}>
        <CardPanel className="teal lighten-4 black-text">
            <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
        </CardPanel>
    </Col>
  
</Row>
  </CollapsibleItem>
</Collapsible>
</div>
)
export default Collapsed;