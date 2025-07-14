import { DELETE_CUSTOMER_EXPENSES_FAILURE, DELETE_CUSTOMER_EXPENSES_REQUEST, DELETE_CUSTOMER_EXPENSES_SUCCESS, GET_CUSTOMER_EXPENSES_FAILURE, GET_CUSTOMER_EXPENSES_REQUEST, GET_CUSTOMER_EXPENSES_SUCCESS, SET_CUSTOMER_EXPENSES_FAILURE, SET_CUSTOMER_EXPENSES_REQUEST, SET_CUSTOMER_EXPENSES_SUCCESS } from "./ActionType";

const initialState = {

    expenses: null,
    loading: false,
    error: null,
    setNewExpenses: false,
    deleteExpense:false
};


export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CUSTOMER_EXPENSES_REQUEST:
        case SET_CUSTOMER_EXPENSES_REQUEST:
        case DELETE_CUSTOMER_EXPENSES_REQUEST:
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
            };
        case GET_CUSTOMER_EXPENSES_FAILURE:
        case SET_CUSTOMER_EXPENSES_FAILURE:
        case DELETE_CUSTOMER_EXPENSES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case SET_CUSTOMER_EXPENSES_SUCCESS:
            return {
                ...state,
                setNewExpenses: true,
                loading: false,
            };
        case DELETE_CUSTOMER_EXPENSES_SUCCESS:
            return{
                ...state,
                deleteExpense:true,
                error:null,
                loading:false
            }
        default:
            return state;
    }
}