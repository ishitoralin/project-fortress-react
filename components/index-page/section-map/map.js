import React from 'react';
import { icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './section-map.module.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import ChangeView from './change-view';
import { Typography } from '@mui/material';
const ICON = icon({
  iconUrl: '/icons/location-med-2-svgrepo-com.svg',
  iconSize: [50, 50],
});
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
              mouseover: (event) => event.target.openPopup(),
            }}
            icon={ICON}
          >
            <Popup autoClose closeOnClick>
              <Typography variant="h6">健身堡壘{el.name}館</Typography>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
