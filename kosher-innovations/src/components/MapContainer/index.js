import React from "react";

const MapContainer = () => {
  return (
    <div className="map-container">
      <iframe
        rel="preconnect"
        title="Kosher Innovations product map"
        src="https://maps.google.com/maps?callback=initMap&q=...&t=m&z=14&output=embed"
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
