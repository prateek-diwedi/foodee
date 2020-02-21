import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location' 
 

const API_KEY = process.env.REACT_APP_APIKEY  // how to get key - step are below
 
class LocationWithCoordinates extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }
 
  render() {
    console.log("info received", this.state.place)
    return (
      <div >
         <GoogleComponent
          apiKey={API_KEY}
          language={'en'}
          coordinates={true}
          // locationBoxStyle={{ "width":"400px"}}
          // locationListStyle={{ "width":"400px"}}
          onChange={(e) => { this.setState({ place: e }) }} />
      </div>
 
    )
  } 
}
 
 
export default LocationWithCoordinates;