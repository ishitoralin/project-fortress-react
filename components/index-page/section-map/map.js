import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import styles from '@/styles/member.module.css';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}
export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 64.536634, lng: 16.779852 });

  const center = [geoData.lat, geoData.lng];
  return (
    <div className={`${styles.wrapper}`}>
      <MapContainer
        center={center}
        zoom={12}
        className={`${styles['map-container']}`}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoData.lat && geoData.lng && (
          <Marker position={[geoData.lat, geoData.lng]} />
        )}
        <ChangeView coords={center} />
      </MapContainer>
    </div>
  );
}
