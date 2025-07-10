import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

const initialState={
    loading:false,
    error:null,
    jwt:null,
    data:null
}

export const authReducer=(state=initialState, action)=>{
    switch(action.type){
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
            return { ...state, loading: true, error: null };

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                jwt: action.payload.jwt,
                data: action.payload
            };
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload.errorMessage,
                jwt:null,
                data:action.payload
            }
        case LOGOUT:
            return initialState

        default:
            return state;
    }
}
