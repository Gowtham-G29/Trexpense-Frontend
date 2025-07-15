import { DELETE_CUSTOMER_EXPENSES_FAILURE, DELETE_CUSTOMER_EXPENSES_REQUEST, DELETE_CUSTOMER_EXPENSES_SUCCESS, GET_CUSTOMER_DETAILS_FAILURE, GET_CUSTOMER_DETAILS_REQUEST, GET_CUSTOMER_DETAILS_SUCCESS, GET_CUSTOMER_EXPENSES_FAILURE, GET_CUSTOMER_EXPENSES_REQUEST, GET_CUSTOMER_EXPENSES_SUCCESS, SET_CUSTOMER_EXPENSES_FAILURE, SET_CUSTOMER_EXPENSES_REQUEST, SET_CUSTOMER_EXPENSES_SUCCESS, UPDATE_CUSTOMER_PROFILE_FAILURE, UPDATE_CUSTOMER_PROFILE_REQUEST, UPDATE_CUSTOMER_PROFILE_SUCCESS } from "./ActionType";

const initialState = {

    expenses: null,
    loading: false,
    error: null,
    setNewExpenses: false,
    deleteExpense: false,
    customerData: null,
    openErrorSnackBar: false
};


export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CUSTOMER_EXPENSES_REQUEST:
        case SET_CUSTOMER_EXPENSES_REQUEST:
        case DELETE_CUSTOMER_EXPENSES_REQUEST:
        case GET_CUSTOMER_DETAILS_REQUEST:
        case UPDATE_CUSTOMER_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_CUSTOMER_EXPENSES_SUCCESS:
            return {
                ...state,
                expenses: action.payload,
                loading: false,
                setNewExpenses: false,
                openErrorSnackBar: false

            };
        case GET_CUSTOMER_EXPENSES_FAILURE:
        case SET_CUSTOMER_EXPENSES_FAILURE:
        case DELETE_CUSTOMER_EXPENSES_FAILURE:
        case GET_CUSTOMER_DETAILS_FAILURE:
        case UPDATE_CUSTOMER_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                openErrorSnackBar: true

            };
        case SET_CUSTOMER_EXPENSES_SUCCESS:
            return {
                ...state,
                setNewExpenses: true,
                loading: false,
                openErrorSnackBar: false

            };
        case DELETE_CUSTOMER_EXPENSES_SUCCESS:
            return {
                ...state,
                deleteExpense: true,
                error: null,
                loading: false,
                openErrorSnackBar: false

            }
        case GET_CUSTOMER_DETAILS_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                customerData: action.payload,
                openErrorSnackBar: false

            }
        case UPDATE_CUSTOMER_PROFILE_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                openErrorSnackBar: false

            }
        default:
            return state;
    }
}