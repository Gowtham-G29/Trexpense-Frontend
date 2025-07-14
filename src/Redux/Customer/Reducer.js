const initialState = {

    expenses: null,
    loading: false,
    error: null,
    setNewExpenses: false
};


export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CUSTOMER_EXPENSES_REQUEST":
        case "SET_CUSTOMER_EXPENSES_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "GET_CUSTOMER_EXPENSES_SUCCESS":
            return {
                ...state,
                expenses: action.payload,
                loading: false,
            };
        case "GET_CUSTOMER_EXPENSES_FAILURE":
        case "SET_CUSTOMER_EXPENSES_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case "SET_CUSTOMER_EXPENSES_SUCCESS":
            return {
                ...state,
                setNewExpenses: true,
                loading: false,
            };

        default:
            return state;
    }
}