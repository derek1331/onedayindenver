import React from "react";
import "./Second.css";
import Cardy  from "../../components/Card"
import Collapsed from "../../components/Collapsible"


class Second extends React.Component {
  render() {
    return (
    <div className="bigdiv">
      <div className="collapis">
      <Collapsed /> 
      </div>
    </div>
    );
  }
}
export default Second;
