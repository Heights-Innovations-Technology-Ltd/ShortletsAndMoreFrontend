import { combineReducers } from "@reduxjs/toolkit";
import { authDataReducer } from "./Slice/authSlice";
import { apartmentDataReducer } from "./Slice/roomSlice";

const rootReducer = combineReducers({
  apartmentDataReducer: apartmentDataReducer,
  authDataReducer: authDataReducer,
});

export default rootReducer;
