import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Money from "../../assets/money.png";
import L from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import { ERROR_FETCH } from "../../Redux/Error/ActionType";
import currentLocation2 from "../../assets/currentLocation2.png"

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
  const dispatch=useDispatch()

  const { customer} = useSelector((store) => store);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation([latitude, longitude]);
        },
        (error) => {
          dispatch({type:ERROR_FETCH})
          console.error("Error getting location", error);
          setCurrentLocation([0, 0]);
        }
      );
    } else {
      setCurrentLocation([0, 0]);
    }
  }, []);

  const customIcon1 = new L.Icon({
    iconUrl: Money,
    iconSize: [40, 60],
    iconAnchor: [15, 50],
  });

    const customIcon2 = new L.Icon({
    iconUrl: currentLocation2,
    iconSize: [40, 60],
    iconAnchor: [15, 50],
  });


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
          <Marker position={currentLocation} icon={customIcon2}>
            <Popup>
              You are here <br />
            </Popup>
          </Marker>
          {typeof customer?.expenses === "string" ? null : (
            <>
              {(customer?.expenses || []).map((expense) => {
                const latitude = Number(expense.latitude);
                const longitude = Number(expense.longitude);
                return (
                  <Marker
                    key={expense.id}
                    position={[latitude, longitude]}
                    icon={customIcon1}
                  >
                    <Popup>
                      <div className="flex flex-col space-y-1">
                        <div className="flex gap-1">
                          <span className="text-sm font-bold text-slate-600">
                            Amount:
                          </span>
                          <span> ₹ {expense.amount}</span>
                        </div>

                        <div className="flex gap-1">
                          <span className="text-sm font-bold text-slate-600">
                            Address:
                          </span>
                          <span>{expense.address}</span>
                        </div>
                        <div className="flex gap-7">
                          <span className="text-sm font-bold text-slate-600">
                            Time:
                          </span>
                          <span>
                            {new Date(expense.createdAt).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </>
          )}

          <CenterMap currentLocation={currentLocation} />
        </MapContainer>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MapComponent;
