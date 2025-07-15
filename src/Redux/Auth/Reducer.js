import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    CONFIRM_ACTIVATION_REQUEST,
    CONFIRM_ACTIVATION_SUCCESS,
    CONFIRM_ACTIVATION_FAILURE,
    LOGOUT,
    SEND_ACTIVATION_MAIL_SUCCESS,
    SEND_ACTIVATION_MAIL_REQUEST,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_FAILURE,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_MAIL_SEND_REQUEST,
    RESET_PASSWORD_MAIL_SEND_FAILURE,
    RESET_PASSWORD_MAIL_SEND_SUCCESS,
} from "./ActionType";

const initialState = {
    user: null,
    loading: false,
    error: null,
    jwt: null,
    data: null,
    activate: false,
    activationMailSent: false,
    passwordResetMailSent: false,
    passwordResetSuccessful: false,

};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case SEND_ACTIVATION_MAIL_REQUEST:
        case RESET_PASSWORD_MAIL_SEND_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case CONFIRM_ACTIVATION_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                activate: false,
            };

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                jwt: action.payload.jwt,
                data: action.payload,

            };

        case CONFIRM_ACTIVATION_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                activate: true,

            };

        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.name,
                error: null,
                data: action.payload,
            };

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
        case RESET_PASSWORD_MAIL_SEND_FAILURE:
        case RESET_PASSWORD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: null,

            };

        case CONFIRM_ACTIVATION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                activate: false,

            };

        case SEND_ACTIVATION_MAIL_SUCCESS:
            return {
                ...state,
                activationMailSent: true,

            }
        case RESET_PASSWORD_MAIL_SEND_SUCCESS:
            return {
                ...state,
                passwordResetMailSent: true,
                loading: false,
            }
        case LOGOUT:
            return {
               ...initialState,
            } 

        default:
            return state;
    }
};
