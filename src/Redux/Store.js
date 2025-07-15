import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerReducer } from "./Customer/Reducer";
import { errorReducer } from "./Error/Reducer";


const rootReducer=combineReducers({
   auth:authReducer,
   customer:customerReducer,
   error:errorReducer
});

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))