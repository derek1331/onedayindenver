import React from "react";
import "./Collapse.css";
import {
  Collapsible,
  CollapsibleItem,
  Row,
  Col,
  CardPanel
} from "react-materialize";

const Collapsed = (props) => (
  <div>
    <Collapsible popout defaultActiveKey={10}>
      <CollapsibleItem header="Adventure" icon="filter_drama">
        <Row>{props.adventure}</Row>
      </CollapsibleItem>
      <CollapsibleItem header="Dining" icon="place">
        <Row>{props.dining}</Row>
      </CollapsibleItem>
      <CollapsibleItem header="Entertainment" icon="whatshot">
        <Row>{props.entertainment}</Row>
      </CollapsibleItem>
    </Collapsible>
  </div>
);
export default Collapsed;
