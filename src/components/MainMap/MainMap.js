import React, { Component } from 'react';
import classnames from "classnames";
import { Map, Marker, TileLayer } from "react-leaflet";
import VehicleSocket from "../VehicleSocket/VehicleSocket";
import { divIcon } from "leaflet";

const position = [12.9, 77.63];
const cover = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0 };
const urlParams = new URLSearchParams(window.location.search);

class MainMap extends Component {

    state = {
        zoom: urlParams.get("zoom") || 14,
        position: urlParams.get("position") ? urlParams.get("position").split(",") : position,
    };

    render() {

      return(
        <VehicleSocket>
        {assets => {
          console.log('Vehicle data:', assets);
          
          return (
            <div style={cover}>
              <Map center={this.state.position} zoom={this.state.zoom} style={cover}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                
                {
                  assets.map(vehicle => {
                  const { vehicleID, type } = vehicle;
                  let classes = {
                    ["marker"]: true,
                  };
                  if (type === "rail") {
                    classes[`rail${vehicleID}`] = true;
                  } else if (type === "bus") {
                    classes["bus"] = true;
                  }

                  const icon = divIcon({
                    className: classnames(classes),
                    html: `<span>${vehicleID}</span>`,
                  });

                  return (
                    <Marker
                      icon={icon}
                      key={vehicle.vehicleID}
                      position={[vehicle.latitude, vehicle.longitude]}
                    />
                  );
                })}
              </Map>
            </div>
          );
        }}
      </VehicleSocket>
      );
    }
}

export default MainMap;