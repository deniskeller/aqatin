import React, { useEffect, useState } from 'react';
import styles from './MapContacts.module.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

const MapContacts = () => {
  const iconMarkup = renderToStaticMarkup(
    <div className={styles.Marker}>
      <BaseIcon icon={ALL_ICONS.MAP_MARKER} viewBox="0 0 33 41" />
    </div>
  );

  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });

  return (
    <>
      <MapContainer
        center={[40.70307671740099, -74.01387565804097]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[40.70307671740099, -74.01387565804097]}
          icon={customMarkerIcon}
        >
          <Popup>17 STATE STREET SUITE 4000, NY 10004 SERVCORP</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MapContacts;
