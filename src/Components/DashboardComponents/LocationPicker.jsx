import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import pinLocation from "../../assets/pin2.png";
import currentLocationMarker from "../../assets/currentLocation2.png";
import { getAddressFromCoordinates } from "../../Services/Api";
import { useDispatch } from "react-redux";
import { setCustomerExpenses } from "../../Redux/Customer/Action";

// Custom icon for clicked location
const clickedLocationIcon = new L.Icon({
  iconUrl: pinLocation,
  iconSize: [50, 50],
  iconAnchor: [13, 50],
});

// Custom icon for current location
const currentLocationIcon = new L.Icon({
  iconUrl: currentLocationMarker,
  iconSize: [30, 50],
  iconAnchor: [17, 50],
});

const LocationPickerMap = ({
  pendingFormData,
  setOpenLocationPicker,
  setOpen,
  setOpenSuccessSnackBar,
}) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [pendingLocation, setPendingLocation] = useState(null);

  const [finalLocation, setFinalLocation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition([latitude, longitude]);
        },
        (error) => console.error("Error getting location:", error)
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        setFinalLocation(null);
        setPendingLocation(e.latlng);
        setTimeout(() => {
          setIsModalOpen(true);
        }, 1000);
      },
    });
    return null;
  };

  const handleLocationConfirmation = async (confirmed) => {
    setIsModalOpen(false);
    if (confirmed) {
      setFinalLocation(pendingLocation);

      const address = await getAddressFromCoordinates(
        pendingLocation.lat,
        pendingLocation.lng
      );
      if (pendingLocation && address) {
        pendingFormData.append("latitude", JSON.stringify(pendingLocation.lat));
        pendingFormData.append(
          "longitude",
          JSON.stringify(pendingLocation.lng)
        );
        pendingFormData.append("address", address);
        dispatch(setCustomerExpenses(pendingFormData));
      }

      setPendingLocation(null);
      setOpenSuccessSnackBar(true);
    }
  };

  if (!currentPosition) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Dialog
        open={isModalOpen}
        onClose={() => handleLocationConfirmation(false)}
      >
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          Do you want to set this location with expense record?
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleLocationConfirmation(false)}
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              setOpenLocationPicker(false);
              handleLocationConfirmation(true);
              setOpen(false);
            }}
            color="primary"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <MapContainer
        center={currentPosition}
        zoom={13}
        style={{ height: "60vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapClickHandler />

        <Marker position={currentPosition} icon={currentLocationIcon}>
          <Popup>You are here</Popup>
        </Marker>

        {finalLocation && (
          <Marker position={finalLocation} icon={clickedLocationIcon}>
            <Popup>Manually Chosen Location</Popup>
          </Marker>
        )}

        {pendingLocation && (
          <Marker position={pendingLocation} icon={clickedLocationIcon}>
            <Popup>Manually Chosen Location</Popup>
          </Marker>
        )}
      </MapContainer>
    </>
  );
};

export default LocationPickerMap;
