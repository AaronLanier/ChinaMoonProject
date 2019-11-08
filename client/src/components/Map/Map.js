import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./Map.css";

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 33.966855,
      lng: -84.666907
    },
    zoom: 16
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '450px', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCazfvB84kfXpGqh_cd5FtBapcFXWp3LKk' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={33.967670}
            lng={-84.667320}
            text="3960 Mary Eliza Trace NW"
            color="blue"

          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;