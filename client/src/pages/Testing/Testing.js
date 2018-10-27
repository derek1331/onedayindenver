import React, {Component} from "react";
import API from "../../utils/API";
import axios from "axios-jsonp-pro";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Testing extends Component {
    axiosRequest() {
        console.log("been clicked");
        axios.jsonp(`https://localhost:3000/api/events`, {})
            .then(res => {

                console.log(res);

            });
    };

    render() {
        return (
            <div>
                <h1>This is a test</h1>
                <button onClick={this.axiosRequest}>This is a button</button>
                <Map google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>test</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBhNoh-8XLeci7x7IWHfIGXuxcp1djJfq8"
})(Testing);