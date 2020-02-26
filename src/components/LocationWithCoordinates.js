import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location';
import "./LocationWithCoordinates.scss";


const API_KEY = process.env.REACT_APP_APIKEY

class LocationWithCoordinates extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: {},
    };
  }
  update = (e) => {
    this.setState({ place: e });
    let coords = e.coordinates
    this.props.setCoordinates({
      coords: coords
    })
  }

  render() {

    return (
      <div style={{
        "width": "400px",
        "backgroundColor": "white",
        "border-color": "brown",
        "border-radius": "20px",
      }}>
        <GoogleComponent
          apiKey={API_KEY}
          language={'en'}
          coordinates={true}
          locationBoxStyle={'custom-style-box'}
          locationListStyle={'custom-style-list'}
          onChange={this.update}
        />
      </div>

    )
  }
}


export default LocationWithCoordinates;