import api from "../../Services/Api";
import { GET_CUSTOMER_EXPENSES_FAILURE, GET_CUSTOMER_EXPENSES_REQUEST, GET_CUSTOMER_EXPENSES_SUCCESS } from "./ActionType";



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
    }
}

export const setCustomerExpenses = (data) => async (dispatch) => {
    dispatch({ type: "SET_CUSTOMER_EXPENSES_REQUEST" });

    try {
        const response = await api.post("/saveExpenses", data, {
        });
        console.log("Expenses set successfully:", response.data);
        dispatch({
            type: "SET_CUSTOMER_EXPENSES_SUCCESS",
            payload: response.data,
        });
        dispatch(getCustomerExpenses());
    } catch (error) {
        console.error("Error setting customer expenses:", error);
        dispatch({
            type: "SET_CUSTOMER_EXPENSES_FAILURE",
            payload: error.response?.data || "An error occurred while setting expenses.",
        });
    }
}