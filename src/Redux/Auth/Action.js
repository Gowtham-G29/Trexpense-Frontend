import axios from "axios";
import api, { API_BASE_URL } from "../../Services/Api";
import {
    CONFIRM_ACTIVATION_FAILURE,
    CONFIRM_ACTIVATION_REQUEST,
    CONFIRM_ACTIVATION_SUCCESS,
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    RESET_PASSWORD_FAILURE,
    RESET_PASSWORD_MAIL_SEND_FAILURE,
    RESET_PASSWORD_MAIL_SEND_REQUEST,
    RESET_PASSWORD_MAIL_SEND_SUCCESS,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    SEND_ACTIVATION_MAIL_FAILURE,
    SEND_ACTIVATION_MAIL_REQUEST,
    SEND_ACTIVATION_MAIL_SUCCESS
} from "./ActionType";
import { ERROR_FETCH } from "../Error/ActionType";

export const register = (userData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    try {
        const response = await axios.post(`${API_BASE_URL}/register`, userData);


        const { data } = response;

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
            dispatch({ type: REGISTER_SUCCESS, payload: data });
        }
        dispatch(sendActivationMail(userData.email));

    } catch (error) {
        dispatch({ type: ERROR_FETCH })

        dispatch({
            type: REGISTER_FAILURE,
            payload: error?.response?.data
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
            payload: error?.response?.data
        });
        dispatch({ type: ERROR_FETCH })
    }
}

export const getUser = () => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST })
    try {
        const { data } = await api.get("/getUser");
        dispatch({ type: GET_USER_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: GET_USER_FAILURE, payload: error.message })
        dispatch({ type: ERROR_FETCH })


    }
}


export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.clear();
}

export const sendActivationMail = (userEmail) => async (dispatch) => {
    dispatch({ type: SEND_ACTIVATION_MAIL_REQUEST });
    try {

        const response = await api.post("/activateAccount", null, {
            params: {
                email: userEmail
            }
        })
        dispatch({ type: SEND_ACTIVATION_MAIL_SUCCESS, payload: response.data })

    } catch (error) {
        dispatch({ type: ERROR_FETCH })

        dispatch({
            type: SEND_ACTIVATION_MAIL_FAILURE,
            payload: error?.response?.message
        });


    }
}

export const confirmAccountActivation = (token) => async (dispatch) => {
    dispatch({ type: CONFIRM_ACTIVATION_REQUEST });
    try {
        await api.post("/confirmActivation", null, {
            params: {
                activationToken: token
            }
        })
        dispatch({ type: CONFIRM_ACTIVATION_SUCCESS })

    } catch (error) {
        dispatch({ type: ERROR_FETCH })

        dispatch({
            type: CONFIRM_ACTIVATION_FAILURE,
            payload: error?.response?.message
        })


    }

}

export const sendResetPasswordMail = (email) => async (dispatch) => {
    dispatch({ type: RESET_PASSWORD_MAIL_SEND_REQUEST })
    try {
        const { data } = await axios.post(`${API_BASE_URL}/sentPasswordResetEmail`, null, {
            params: {
                email: email
            }
        }
        );

        dispatch({ type: RESET_PASSWORD_MAIL_SEND_SUCCESS, payload: data })

    } catch (error) {

        dispatch({ type: RESET_PASSWORD_MAIL_SEND_FAILURE, payload: error.response.data })
        dispatch({ type: ERROR_FETCH })

    }
}

export const passwordReset = (email, resetToken, newPassword) => async (dispatch) => {
    dispatch({ type: RESET_PASSWORD_REQUEST })
    try {

        const { data } = axios.patch(`${API_BASE_URL}/resetPassword`, null, {
            params: {
                email: email,
                resetToken: resetToken,
                newPassword: newPassword
            }
        })
        dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: RESET_PASSWORD_FAILURE, payload: error.response.data })
        dispatch({ type: ERROR_FETCH })

    }
}


