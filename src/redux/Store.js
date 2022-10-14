import { combineReducers, createStore } from "redux";
import { AddReducer, ClearReducer, DivideReducer, MultiplyReducer, SubtractReducer } from "./Reducers";

const reducer = combineReducers(AddReducer,SubtractReducer,MultiplyReducer,DivideReducer,ClearReducer)

export const store = createStore(reducer)