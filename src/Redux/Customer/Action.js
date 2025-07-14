import api from "../../Services/Api";
import { DELETE_CUSTOMER_EXPENSES_FAILURE, DELETE_CUSTOMER_EXPENSES_REQUEST, DELETE_CUSTOMER_EXPENSES_SUCCESS, GET_CUSTOMER_EXPENSES_FAILURE, GET_CUSTOMER_EXPENSES_REQUEST, GET_CUSTOMER_EXPENSES_SUCCESS } from "./ActionType";



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

export const deleteCustomerExpense = (expenseId) => async (dispatch) => {
    console.log(expenseId)
    dispatch({ type: DELETE_CUSTOMER_EXPENSES_REQUEST });
    try {
        const response = await api.delete("/deleteExpense", {
            params: {
                expenseId: expenseId
            }
        })
        console.log(response);
        dispatch({ type: DELETE_CUSTOMER_EXPENSES_SUCCESS, payload: response.data })
        dispatch(getCustomerExpenses());

    } catch (error) {
        dispatch({ type: DELETE_CUSTOMER_EXPENSES_FAILURE, payload: error.response?.message })

    }
}