import React from 'react';
import 'leaflet/dist/leaflet.css';
import styles from './section-map.module.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import ChangeView from './change-view';

export default function Map({ defaultCenter, location, locations }) {
  return (
    <div className={`${styles.wrapper}`}>
      <MapContainer
        className={`${styles['map-container']}`}
        center={defaultCenter}
        zoom={18}
      >
        <ChangeView center={location.center} zoom={18} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></TileLayer>
        {locations.map((el, i) => (
          <Marker
            key={i}
            position={el.center}
            eventHandlers={{
              click: () => {},
            }}
          >
            <Popup>
              <h1>{el.name}</h1>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
