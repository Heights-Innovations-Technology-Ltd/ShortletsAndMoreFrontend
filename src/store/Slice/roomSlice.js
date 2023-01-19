import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getApartment, getFeaturedRooms, getRoomType } from "../Action/actions";

export const apartmentData = createSlice({
  name: "apartment",
  initialState: {
    featuredRooms: [],
    apartmentData: [],
    roomTypes: [],
    loading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    //rooms
    [getFeaturedRooms.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getFeaturedRooms.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.featuredRooms = payload;
    },
    [getFeaturedRooms.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //apartments
    [getApartment.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getApartment.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.apartmentData = payload;
    },
    [getApartment.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //room types
    [getRoomType.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getRoomType.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.roomTypes = payload;
    },
    [getRoomType.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const apartmentDataReducer = apartmentData.reducer;
