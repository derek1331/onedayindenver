import React from "react";
import "./Fourth.css";
import {Cardy}  from "../../components/Card"
import Cal from "../../components/Cal"


class Fourth extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s6">
                <Cardy color="white" name="Hiking" description="fun" image="https://www.travelwyoming.com/sites/default/files/uploads/consumer/7-18_MedicineBowHikingFishing_KL_0708_3298.jpg"/>
                <Cardy />
                <Cardy />
                <Cardy />

            </div>
            <div className="col s6 center">
                <Cal />

            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default Fourth;
