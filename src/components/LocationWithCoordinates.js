import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location' 
 

const API_KEY = process.env.REACT_APP_APIKEY  

class LocationWithCoordinates extends Component {
  constructor(props) {
    //console.log("props location --->", props)
    super(props)
    this.state = {
      place: {},
    };
  }
  update = (e) => {
    this.setState({ place: e });
    let coords = e.coordinates
    console.log("cooords---->>>>>>--->>", this.state.place)
    this.props.setCoordinates({
      coords: coords
    })
  }
 
  render() {
    
    // console.log("info received", location)
    return (
      <div style={{
      "width": "400px", 
      "background": "transparent",
      "border-color": "brown",
      "border-radius": "20px",
  }}>
         <GoogleComponent
          apiKey={API_KEY}
          language={'en'}
          coordinates={true}
          // locationBoxStyle={{ width:"400px"}}
          // locationListStyle={{ "width":"400px"}}
          onChange={this.update}
          // props={this.location}
           />
      </div>
     
    )
  } 
}
 
 
export default LocationWithCoordinates;