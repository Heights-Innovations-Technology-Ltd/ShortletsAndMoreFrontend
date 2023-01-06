import { combineReducers } from "@reduxjs/toolkit";
import { ApartmentDataReducer } from "./slice";

const rootReducer = combineReducers({
  ApartmentDataReducer: ApartmentDataReducer,
});

export default rootReducer;
