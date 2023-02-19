import { createSlice } from "@reduxjs/toolkit";

// This slice will hold user needed information
const StaffData = createSlice({
  name: "Staff data",
  initialState: {
    staffInfo: {},
  },
  reducers: {
    saveStaffInfo: (state, action) => {
      state.staffInfo = action.payload;
    },
  },
});
export const StaffDataReducer = StaffData.reducer;

export const { saveStaffInfo } = StaffData.actions;
