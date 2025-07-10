import axios from "axios";
import { API_BASE_URL } from "../../Services/Api";
import {
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "./ActionType";

export const register = (userData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    try {
        const  response= await axios.post(`${API_BASE_URL}/register`, userData);
        console.log(response);
       
        const {data}=response;

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
            dispatch({ type: REGISTER_SUCCESS, payload: data });
        }



    } catch (error) {
           dispatch({
                type: REGISTER_FAILURE,
                payload: error.response.data
            });
    }
};
