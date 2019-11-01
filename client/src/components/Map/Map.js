import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 33.966855,
      lng: -84.666907
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '40%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCazfvB84kfXpGqh_cd5FtBapcFXWp3LKk' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={33.967670}
            lng={-84.667320}
            text="ChinaMoon Restaurant"
            
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;