import React from "react";
import "./Second.css";
import Cardy  from "../../components/Card"
import Collapsed from "../../components/Collapsible"


class Second extends React.Component {
  render() {
    return (
      <div>
      <Collapsed /> 
      <Cardy color="blue-grey darken-1"/>
      </div>
    );
  }
}
export default Second;
