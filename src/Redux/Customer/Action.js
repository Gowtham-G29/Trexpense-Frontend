import api from "../../Services/Api";
import { ERROR_FETCH } from "../Error/ActionType";
import { DELETE_CUSTOMER_EXPENSES_FAILURE, DELETE_CUSTOMER_EXPENSES_REQUEST, DELETE_CUSTOMER_EXPENSES_SUCCESS, GET_CUSTOMER_DETAILS_FAILURE, GET_CUSTOMER_DETAILS_REQUEST, GET_CUSTOMER_DETAILS_SUCCESS, GET_CUSTOMER_EXPENSES_FAILURE, GET_CUSTOMER_EXPENSES_REQUEST, GET_CUSTOMER_EXPENSES_SUCCESS, UPDATE_CUSTOMER_PROFILE_FAILURE, UPDATE_CUSTOMER_PROFILE_REQUEST, UPDATE_CUSTOMER_PROFILE_SUCCESS } from "./ActionType";



export const getCustomerExpenses = () => async (dispatch) => {
    dispatch({ type: GET_CUSTOMER_EXPENSES_REQUEST });

    try {
        const response = await api.get("/getUserExpenses");
        dispatch({
            type: GET_CUSTOMER_EXPENSES_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        console.error("Error fetching customer expenses:", error);
        dispatch({
            type: GET_CUSTOMER_EXPENSES_FAILURE,
            payload: error.response?.data || "An error occurred while fetching expenses.",
        });
        dispatch({ type: ERROR_FETCH })
    }
}

export const setCustomerExpenses = (data) => async (dispatch) => {
    dispatch({ type: "SET_CUSTOMER_EXPENSES_REQUEST" });

    try {
        const response = await api.post("/saveExpenses", data, {
        });
        dispatch({
            type: "SET_CUSTOMER_EXPENSES_SUCCESS",
            payload: response.data,
        });
        dispatch(getCustomerExpenses());
    } catch (error) {

        console.error("Error setting customer expenses:", error);
        dispatch({ type: ERROR_FETCH })
        dispatch({
            type: "SET_CUSTOMER_EXPENSES_FAILURE",
            payload: error.response?.data || "An error occurred while setting expenses.",
        });

    }
}

export const deleteCustomerExpense = (expenseId) => async (dispatch) => {
    dispatch({ type: DELETE_CUSTOMER_EXPENSES_REQUEST });
    try {
        const response = await api.delete("/deleteExpense", {
            params: {
                expenseId: expenseId
            }
        })
        dispatch({ type: DELETE_CUSTOMER_EXPENSES_SUCCESS, payload: response.data })
        dispatch(getCustomerExpenses());

    } catch (error) {
        dispatch({ type: DELETE_CUSTOMER_EXPENSES_FAILURE, payload: error.response?.message })
        dispatch({ type: ERROR_FETCH })

    }
}

export const getCustomerData = () => async (dispatch) => {
    dispatch({ type: GET_CUSTOMER_DETAILS_REQUEST });
    try {
        const { data } = await api.get("/getUserProfile",);
        dispatch({ type: GET_CUSTOMER_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ERROR_FETCH })
        dispatch({
            type: GET_CUSTOMER_DETAILS_FAILURE,
            payload: error?.response?.message
        })

    }

}

export const updateUserProfile = (data) => async (dispatch) => {
    dispatch({ type: UPDATE_CUSTOMER_PROFILE_REQUEST })
    try {
        await api.patch("/updateProfileImage", data);
        dispatch({
            type: UPDATE_CUSTOMER_PROFILE_SUCCESS
        })
        dispatch(getCustomerData());

    } catch (error) {

        dispatch({
            type: UPDATE_CUSTOMER_PROFILE_FAILURE,
            payload: error?.response?.message
        })
        dispatch({ type: ERROR_FETCH })
        return error;

    }

}