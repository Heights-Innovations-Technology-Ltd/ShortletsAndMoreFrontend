import { createSlice } from "@reduxjs/toolkit";

export const apartmentData = createSlice({
  name: "apartment data",
  initialState: {
    apartmentItems: [],
  },
  reducers: {
    setApartmentItems: (state, action) => {
      state.apartmentItems = action.payload;
    },
  },
});

export const ApartmentDataReducer = apartmentData.reducer;
export const { setApartmentItems } = apartmentData.actions;
