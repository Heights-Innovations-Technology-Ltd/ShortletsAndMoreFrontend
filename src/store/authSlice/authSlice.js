import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { registerUser, userLogin } from "./authActions";

const BASE_URL = "http://adminhitl-001-site1.ctempurl.com/";

export const authDataSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    success: false,
    error: null,
    userRegister: {},
    userInfo: null,
  },
  reducers: {
    // registerUser: (state, action) => {
    //   state.userRegister = [action.payload];
    // },
    // loginUser: (state, action) => {
    //   state.userLogin = [action.payload];
    // },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      // state.userToken = payload.userToken
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

//   "http://adminhitl-001-site1.ctempurl.com/api/Guest/Login",

export const authDataReducer = authDataSlice.reducer;
// export const { registerUser, loginUser } = authData.actions;
// export default authDataSlice.reducer;
