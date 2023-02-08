import React from "react";

const MapContainer = () => {
  return (
    <div className="map-container">
      <iframe
        rel="preconnect"
        title="Kosher Innovations product map"
        src="https://www.google.com/maps/d/embed?callback=initMap&mid=15-DxkcwmeXGIyUiBxfB2ibOJbtQ&hl=en&ehbc=2E312F"
        // height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapContainer;
