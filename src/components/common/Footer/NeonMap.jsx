import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// 1. CONFIGURATION
// Note: Mapbox uses [Longitude, Latitude]. Leaflet uses [Latitude, Longitude].
// Your location: Lat 9.9351414, Lng 78.13135
const LOCATION_LNG_LAT = [78.13135, 9.9351414]; 

const GOOGLE_MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Together+Tech+Madurai";

// REPLACE THIS WITH YOUR TOKEN
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN; 

const NeonMap = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_TOKEN;

    // 2. INITIALIZE MAPBOX
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: LOCATION_LNG_LAT,
      zoom: 17, // Zoomed in to see 3D effect
      pitch: 60, // Tilted to see 3D model
      bearing: -20,
      style: 'mapbox://styles/mapbox/standard', // The 3D compatible style
    });

    // 3. ADD CONTROLS
    mapRef.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // 4. ADD CUSTOM NEON MARKER
    // We create a standard DOM element for the marker using your CSS classes
    const el = document.createElement('div');
    el.className = 'custom-marker-container';
    el.innerHTML = `
      <div class="pin-wrapper">
        <div class="pin-head"></div>
        <div class="pin-pulse"></div>
      </div>
    `;

    // Click listener for the marker
    el.addEventListener('click', () => {
      new mapboxgl.Popup({ offset: 25, closeButton: false, className: 'neon-popup' })
        .setLngLat(LOCATION_LNG_LAT)
        .setHTML(`
          <div style="text-align: center; font-size: 12px; line-height: 1.4; color: white;">
            <strong style="color: #ff6b00; font-size: 14px;">TogetherTech</strong><br />
            Madurai HQ
          </div>
        `)
        .addTo(mapRef.current);
    });

    // Add marker to map
    new mapboxgl.Marker(el)
      .setLngLat(LOCATION_LNG_LAT)
      .addTo(mapRef.current);


    // 5. LOAD 3D STYLES & MODELS
    mapRef.current.on('style.load', () => {
      const map = mapRef.current;

      // A. Set Dusk Mode
      map.setConfigProperty('basemap', 'lightPreset', 'dusk');

      // B. Add 3D Model (Tower) positioned at your location
      map.addSource('model', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {
            'model-uri': 'https://docs.mapbox.com/mapbox-gl-js/assets/tower.glb'
          },
          geometry: {
            coordinates: LOCATION_LNG_LAT,
            type: 'Point'
          }
        }
      });

      map.addLayer({
        id: 'tower',
        type: 'model',
        slot: 'middle',
        source: 'model',
        minzoom: 15,
        layout: {
          'model-id': ['get', 'model-uri']
        },
        paint: {
          'model-opacity': 1,
          'model-rotation': [0.0, 0.0, 35.0],
          'model-scale': [0.8, 0.8, 1.2],
          'model-cast-shadows': true,
          'model-emissive-strength': 0.8
        }
      });
    });

    // Cleanup on unmount
    return () => mapRef.current.remove();
  }, []);

  return (
    <>
      {/* 6. CSS STYLES (Adapted for Mapbox) */}
      <style>{`
        /* Map Container */
        .map-container {
          width: 100%;
          height: 100%;
          background: #000;
        }

        /* --- Your Original Neon Pin CSS --- */
        .pin-wrapper {
          position: relative;
          width: 40px;
          height: 40px;
          /* Mapbox handles positioning, so we adjust translation here */
          transform: translate(-50%, -50%); 
          cursor: pointer;
        }

        .pin-head {
          width: 30px;
          height: 30px;
          background: radial-gradient(circle at 30% 30%, #ff8800, #ff6b00);
          border: 2px solid #ffffff;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          position: absolute;
          top: 0;
          left: 5px;
          box-shadow: -2px 2px 10px rgba(0,0,0,0.5);
          z-index: 10;
          animation: hover 2s ease-in-out infinite;
        }
        
        .pin-head::after {
          content: '';
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .pin-pulse {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%) rotateX(60deg);
          width: 20px;
          height: 20px;
          background: rgba(255, 107, 0, 0.5);
          border-radius: 50%;
          filter: blur(2px);
          animation: pulse-shadow 2s ease-in-out infinite;
        }

        @keyframes hover {
          0%, 100% { top: 0; }
          50% { top: -12px; }
        }

        @keyframes pulse-shadow {
          0%, 100% { width: 20px; height: 10px; opacity: 0.5; }
          50% { width: 10px; height: 5px; opacity: 0.2; }
        }

        /* --- UI Overlay Button --- */
        .open-map-btn {
          position: absolute;
          bottom: 30px;
          left: 20px;
          z-index: 2; /* Mapbox canvas is z-index 1 */
          background: rgba(0,0,0,0.8);
          color: #ff6b00;
          border: 1px solid #ff6b00;
          padding: 8px 12px;
          font-size: 11px;
          font-weight: bold;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 4px;
          font-family: sans-serif;
          transition: all 0.2s;
        }

        .open-map-btn:hover {
          background: #ff6b00;
          color: #000;
          box-shadow: 0 0 15px rgba(255,107,0,0.5);
        }

        /* --- Mapbox Popup Styling --- */
        .mapboxgl-popup-content {
          background: rgba(0,0,0,0.9) !important;
          border: 1px solid #ff6b00 !important;
          box-shadow: 0 0 15px rgba(255,107,0,0.3) !important;
          padding: 10px;
          border-radius: 4px;
        }
        .mapboxgl-popup-tip {
          border-top-color: #ff6b00 !important;
        }
        .mapboxgl-ctrl-group {
          background: #333 !important;
        }
        .mapboxgl-ctrl-icon {
          filter: invert(1); 
        }
      `}</style>

      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {/* Open in Google Maps Button */}
        <a
          href={GOOGLE_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="open-map-btn"
        >
          Open in Google Maps
        </a>

        {/* Map Container */}
        <div ref={mapContainerRef} className="map-container" />
      </div>
    </>
  );
};

export default NeonMap;