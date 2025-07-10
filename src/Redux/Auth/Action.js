import axios from "axios";
import { API_BASE_URL } from "../../Services/Api";
import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "./ActionType";

export const register = (userData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    try {
        const response = await axios.post(`${API_BASE_URL}/register`, userData);


        const { data } = response;

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

export const login = (userData) => async (dispatch) => {



    dispatch({ type: LOGIN_REQUEST })
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, userData);
        const { data } = response;

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
            dispatch({ type: LOGIN_SUCCESS, payload: data })
        }

    } catch (error) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: error.response.data
        });
    }
}


export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.clear();
}

