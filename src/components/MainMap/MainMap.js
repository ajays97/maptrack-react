import React, { Component } from "react";
import classnames from "classnames";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import VehicleSocket from "../VehicleSocket/VehicleSocket";
import { divIcon } from "leaflet";
import "./MainMap.css";

const position = [12.9, 77.63];
const cover = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
const coverMap = {
  position: "absolute",
  left: 0,
  right: 0,
  top: "4em",
  bottom: 0
};
const urlParams = new URLSearchParams(window.location.search);

class MainMap extends Component {
  state = {
    zoom: urlParams.get("zoom") || 14,
    position: urlParams.get("position")
      ? urlParams.get("position").split(",")
      : position
  };

  render() {
    return (
      <VehicleSocket>
        {assets => {
          return (
            <div className="map" style={coverMap}>
              <Map
                center={this.state.position}
                zoom={this.state.zoom}
                style={cover}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  // url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png "
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {assets.map(vehicle => {
                  const { vehicleID, type } = vehicle;
                  let classes = {
                    ["marker"]: true
                  };
                  if (type === "HUMAN") {
                    classes[`HUMAN`] = true;
                  } else if (type === "TRUCK") {
                    classes["TRUCK"] = true;
                  }

                  const icon = divIcon({
                    className: classnames(classes),
                    iconSize: [72, 72],
                    popupAnchor: [0, -32]
                    // html: `<span>${vehicleID}</span>`,
                  });

                  return (
                    <Marker
                      icon={icon}
                      key={vehicle.vehicleID}
                      position={[
                        vehicle.location.latitude,
                        vehicle.location.longitude
                      ]}
                      onMouseOut={e => {
                        e.target.closePopup();
                      }}
                      onMouseOver={e => {
                        e.target.openPopup();
                      }}
                    >
                      <Popup className="popup">
                        {/* Popup box template here */}
                        <p>
                          <em>Device ID:</em> {vehicle.vehicleID}
                        </p>
                        <p>
                          <em>Device Name:</em> {vehicle.name}
                        </p>
                        <p>
                          <em>Device Type:</em> {vehicle.type}
                        </p>
                      </Popup>
                    </Marker>
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
