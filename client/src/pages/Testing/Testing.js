import React, {Component} from "react";
import API from "../../utils/API";
import axios from "axios-jsonp-pro";

class Testing extends Component {
    axiosRequest () {
        console.log("been clicked");
        axios.jsonp(`https://localhost:3000/api/events` , {})
        .then(res => {

            console.log(res);

        });
    };

    render() {
        return (
        <div>
        <h1>This is a test</h1>
        <button onClick={this.axiosRequest}>This is a button</button>
        </div>
        );
    }
}

export default Testing;