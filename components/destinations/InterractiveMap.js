// components/InteractiveMap.js

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

// Import leaflet icon (for custom markers)
import L from 'leaflet';

// Custom Marker Icon
const customMarker = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41], // size of the shadow
});

// Sample Data for trip destinations
const trips = [
  {
    title: 'Discover the Beauty of Pakistan',
    lat: 30.3753, // Latitude for Pakistan
    lng: 69.3451, // Longitude for Pakistan
    description: 'Explore the breathtaking landscapes and vibrant cities of Pakistan.',
    link: '#',
  },
  {
    title: 'Wine Tasting in Napa Valley, USA',
    lat: 38.5025, // Latitude for Napa Valley, USA
    lng: -122.2654, // Longitude for Napa Valley, USA
    description: 'Indulge in world-class wines in the beautiful Napa Valley.',
    link: '#',
  },
  {
    title: 'Camel Trekking in Morocco',
    lat: 31.7917, // Latitude for Morocco
    lng: -7.0926, // Longitude for Morocco
    description: 'Experience the Sahara Desert with a camel trek through the dunes.',
    link: '#',
  },
  {
    title: 'Trekking the Patagonian Andes, Argentina',
    lat: -50.9423, // Latitude for Patagonia, Argentina
    lng: -73.4068, // Longitude for Patagonia, Argentina
    description: 'Explore the dramatic landscapes of Patagonia in the Andes.',
    link: '#',
  },
  {
    title: 'Road Trip Across Iceland',
    lat: 64.9631, // Latitude for Iceland
    lng: -19.0208, // Longitude for Iceland
    description: 'Take a road trip through the stunning volcanic landscapes of Iceland.',
    link: '#',
  },
  {
    title: 'Exploring the Canadian Rockies',
    lat: 51.1784, // Latitude for Canadian Rockies
    lng: -115.5708, // Longitude for Canadian Rockies
    description: 'Discover the beauty of the Canadian Rockies, perfect for hiking and wildlife watching.',
    link: '#',
  },
];

const InteractiveMap = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-blue-950 mb-4">Explore Trip Ideas on the Map</h2>
        <p className="text-xl text-blue-700 mb-8">
          Click on the map markers to explore unique trip ideas around the world.
        </p>

        {/* Leaflet Map */}
        <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={false} style={{ height: '600px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Map Markers */}
          {trips.map((trip, index) => (
            <Marker key={index} position={[trip.lat, trip.lng]} icon={customMarker}>
              <Popup>
                <h3 className="text-lg font-bold">{trip.title}</h3>
                <p>{trip.description}</p>
                <a href={trip.link} className="text-blue-700 underline">
                  Explore Trip
                </a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default InteractiveMap;

