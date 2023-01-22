// import { createSlice } from "@reduxjs/toolkit";
// import { registerUser, userLogin } from "../Action/actions";

// export const authDataSlice = createSlice({
//   name: "auth",
//   initialState: {
//     loading: false,
//     success: false,
//     error: null,
//     userRegister: {},
//     userInfo: null,
//   },
//   reducers: {},
//   extraReducers: {
//     [registerUser.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [registerUser.fulfilled]: (state) => {
//       state.loading = false;
//       state.success = true;
//     },
//     [registerUser.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },

//     // login user
//     [userLogin.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [userLogin.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       state.userInfo = payload;
//       // state.userToken = payload.userToken
//     },
//     [userLogin.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },
//   },
// });

// export const authDataReducer = authDataSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// This slice will hold user needed information
const UserData = createSlice({
  name: "User data",
  initialState: {
    userInfo: {},
  },
  reducers: {
    saveUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});
export const UserDataReducer = UserData.reducer;

export const { saveUserInfo } = UserData.actions;
