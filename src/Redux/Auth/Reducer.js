import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

const initialState={
    loading:false,
    error:null,
    jwt:null,
    data:null
}

export const authReducer=(state=initialState, action)=>{
    switch(action.type){
        case REGISTER_REQUEST:
            return { ...state, loading: true, error: null };

        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                jwt: action.payload.jwt,
                data: action.payload
            };
        case REGISTER_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload.errorMessage,
                jwt:null,
                data:action.payload
            }

        default:
            return state;
    }
}
