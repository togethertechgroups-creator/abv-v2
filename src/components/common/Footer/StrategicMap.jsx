import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// --- CONFIGURATION ---
// Exact coordinates for Kevell Corp
const LOCATION = [9.9351414, 78.13135]; 
const GOOGLE_MAPS_LINK = `http://googleusercontent.com/maps.google.com/?q=${LOCATION[0]},${LOCATION[1]}`;

// --- CUSTOM STYLES ---
const styles = `
  .leaflet-container {
    width: 100%;
    height: 100%;
    z-index: 1;
    background: #e5e5e5;
  }
  
  /* Corner Brackets Animation */
  .target-corner {
    position: absolute;
    width: 30px;
    height: 30px;
    border: 3px solid #ff6b00;
    z-index: 500;
    pointer-events: none;
  }
  .tl { top: 10px; left: 10px; border-right: 0; border-bottom: 0; }
  .tr { top: 10px; right: 10px; border-left: 0; border-bottom: 0; }
  .bl { bottom: 10px; left: 10px; border-right: 0; border-top: 0; }
  .br { bottom: 10px; right: 10px; border-left: 0; border-top: 0; }

  /* Scan Line */
  .scanner-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(255, 107, 0, 0.6);
    box-shadow: 0 0 10px #ff6b00;
    z-index: 499;
    pointer-events: none;
    animation: scanVertical 4s linear infinite;
  }
  @keyframes scanVertical {
    0% { top: 0%; opacity: 0; }
    50% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }

  /* Pulse Marker */
  .custom-pin {
    background-color: #ff6b00;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 0 0 rgba(255, 107, 0, 0.4);
    animation: pulse-orange 2s infinite;
  }
  @keyframes pulse-orange {
    0% { box-shadow: 0 0 0 0 rgba(255, 107, 0, 0.7); }
    70% { box-shadow: 0 0 0 15px rgba(255, 107, 0, 0); }
    100% { box-shadow: 0 0 0 0 rgba(255, 107, 0, 0); }
  }

  /* "Open Map" Button Style */
  .open-map-btn {
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 600; /* Above map and corners */
    background-color: #ffffff;
    color: #ff6b00;
    border: 2px solid #ff6b00;
    padding: 8px 12px;
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    transition: all 0.2s ease;
    font-family: sans-serif;
  }
  .open-map-btn:hover {
    background-color: #ff6b00;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(255, 107, 0, 0.4);
  }
`;

const icon = L.divIcon({
  className: 'custom-pin',
  iconSize: [16, 16],
  iconAnchor: [8, 8],
  popupAnchor: [0, -10]
});

const StrategicMap = () => {
  return (
    <>
      <style>{styles}</style>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        
        {/* UI Overlays */}
        <div className="target-corner tl"></div>
        <div className="target-corner tr"></div>
        <div className="target-corner bl"></div>
        <div className="target-corner br"></div>
        <div className="scanner-bar"></div>

        {/* RESTORED: The "Open Map" Button */}
        <a 
          href={GOOGLE_MAPS_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="open-map-btn"
        >
          Open in Google Maps
        </a>

        <MapContainer 
          center={LOCATION} 
          zoom={16} 
          scrollWheelZoom={false}
          zoomControl={false} // We add it manually below
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© OSM'
          />
          
          <Marker position={LOCATION} icon={icon}>
            <Popup>
              <div style={{ textAlign: 'center', fontSize: '12px' }}>
                <strong style={{ color: '#ff6b00' }}>Kevell Corp</strong><br/>
                Tnhb colony velachery chennai
              </div>
            </Popup>
          </Marker>

          {/* Zoom Controls Bottom-Right */}
          <ZoomControl position="bottomright" />

        </MapContainer>
      </div>
    </>
  );
};

export default StrategicMap;