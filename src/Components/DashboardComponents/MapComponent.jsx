import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const CenterMap = ({ currentLocation }) => {
  const map = useMap();

  useEffect(() => {
    if (currentLocation) {
      map.setView(currentLocation, 13);
    }
  }, [currentLocation, map]);

  return null;
};

const MapComponent = () => {
  const [currentLocation, setCurrentLocation] = useState(null);


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting location", error);
          setCurrentLocation([0, 0]);
        }
      );
    } else {
      setCurrentLocation([0, 0]);
    }
  }, []);

  // const customIcon1 = new L.Icon({
  //   iconUrl: doctorMarker,
  //   iconSize: [30, 50],
  //   iconAnchor: [15, 50],
  // });

  // const customIcon2 = new L.Icon({
  //   iconUrl: currentLocationMarker,
  //   iconSize: [40, 60],
  //   iconAnchor: [15, 50],
  // });

  return (
    <div style={{ height: "82vh", width: "100%" }}>
      {currentLocation ? (
        <MapContainer
          center={currentLocation}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={currentLocation} >
            <Popup>
              You are here <br />
            </Popup>
          </Marker>
          {/* {doctors.map((doctor, index) => {
            const { latitude, longitude } = doctor.geolocation;
            return (
              <Marker
                key={index}
                position={[latitude, longitude]}
                icon={customIcon1}
              >
                <Popup>
                  <strong>Dr: {doctor.fullName}</strong> <br />
                  {doctor.specialization}
                  <br />
                  {doctor.clinicName} <br />
                </Popup>
              </Marker>
            );
          })} */}
          <CenterMap currentLocation={currentLocation} />
        </MapContainer>
      ) : (
        <p>hello</p>
      )}
    </div>
  );
};

export default MapComponent;
