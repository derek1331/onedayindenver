import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class Container extends React.Component {
    render() {
      if (!this.props.loaded) {
        return <div>Loading...</div>
      }
      return (
        <div>Map will go here</div>
      )
    }
  }
  
   
export default GoogleApiWrapper({
    apiKey: "AIzaSyBhNoh-8XLeci7x7IWHfIGXuxcp1djJfq8"
  })(Container);
