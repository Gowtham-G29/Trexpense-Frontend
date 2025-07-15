import { ERROR_CLOSE, ERROR_FETCH } from "./ActionType"

const initialState = {
    isError: false,
}

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR_FETCH:
            return {
                ...state,
                isError: true
            }
        case ERROR_CLOSE:
            return {
                ...state,
                isError:false
            }
        default:
            return state;
    }
}