import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://adminhitl-001-site1.ctempurl.com/";

export const authData = createSlice({
  name: "apartment",
  initialState: {
    userRegister: [],
    userLogin: [],
  },
  reducers: {
    registerUser: (state, action) => {
      state.userRegister = [action.payload];
    },
    loginUser: (state, action) => {
      state.userLogin = [action.payload];
    },
  },
});

export const registerUserAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://adminhitl-001-site1.ctempurl.com/api/Room",
      data
    );

    dispatch(registerUser(response));
  } catch (err) {
    throw new Error(err);
  }
};

export const loginUserAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://adminhitl-001-site1.ctempurl.com/api/Room",
      data
    );

    dispatch(loginUser(response));
  } catch (err) {
    throw new Error(err);
  }
};

export const authDataReducer = authData.reducer;
export const { registerUser, loginUser } = authData.actions;
