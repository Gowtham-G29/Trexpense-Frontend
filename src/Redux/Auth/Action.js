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
    SEND_ACTIVATION_MAIL_FAILURE,
    SEND_ACTIVATION_MAIL_REQUEST,
    SEND_ACTIVATION_MAIL_SUCCESS
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
        dispatch(sendActivationMail(userData.email));

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

export const getUser=()=>async(dispatch)=>{
    dispatch({type:GET_USER_REQUEST})
    try {
        const {data}=await api.get("/getUser");
        dispatch({type:GET_USER_SUCCESS,payload:data})
        
    } catch (error) {

        dispatch({type:GET_USER_FAILURE,payload:error.message})
        
    }
}


export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.clear();
}

export const sendActivationMail=(userEmail)=>async(dispatch)=>{
    dispatch({type:SEND_ACTIVATION_MAIL_REQUEST});
    try {

        const response=await api.post("/activateAccount",null,{
            params:{
                email:userEmail
            }
        })
        console.log("Response ",response.data);
        dispatch({type:SEND_ACTIVATION_MAIL_SUCCESS,payload:response.data})
        
    } catch (error) {
        console.log(error)
         dispatch({
            type: SEND_ACTIVATION_MAIL_FAILURE,
            payload: error.response.data
        });
        
    }
}

export const confirmAccountActivation=(token)=>async(dispatch)=>{
    dispatch({type:CONFIRM_ACTIVATION_REQUEST});
    try{
        const response =await api.post("/confirmActivation",null,{
            params:{
                activationToken:token
            }
        })
        dispatch({type:CONFIRM_ACTIVATION_SUCCESS})
        console.log(response)

    }catch(error){
        dispatch({
            type:CONFIRM_ACTIVATION_FAILURE,
            payload:error.response?.message
        })

    }

}

