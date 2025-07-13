import axios from "axios";

export const API_BASE_URL = "http://localhost:8080";
export const MAPS_API_KEY = "AIzaSyB_DWw_0mUBfbmFbPNQw4qgUKZ4q61IXlU";


const api = axios.create({ baseURL: API_BASE_URL });


api.interceptors.request.use((config) => {

    const jwt = localStorage.getItem("jwt");

    if (jwt) {
        config.headers["Authorization"] = `Bearer ${jwt}`;
    }
    return config;
});

api.defaults.headers.post["Content-Type"] = "application/json"

export default api;


export const sentContactUsMail = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/contactUs`, data);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error sending contact us mail:", error);
        throw error;
    }
}


export const getAddressFromCoordinates = async (lat, lng) => {
    console.log("Fetching address for coordinates:", lat, lng);

  try {
    const response = await axios.post(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${MAPS_API_KEY}`
    );
    const address = response.data?.results?.[2]?.formatted_address;
    return address;
  } catch (error) {
    console.error("Error fetching address from coordinates:", error);
    throw error;
  }
};
