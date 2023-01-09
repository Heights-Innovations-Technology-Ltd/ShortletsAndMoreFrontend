import { combineReducers } from "@reduxjs/toolkit";
import { authDataReducer } from "./authSlice/authSlice";
import { apartmentDataReducer } from "./roomSlice/roomSlice";

const rootReducer = combineReducers({
  apartmentDataReducer: apartmentDataReducer,
  authDataReducer: authDataReducer,
});

export default rootReducer;
