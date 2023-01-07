import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://adminhitl-001-site1.ctempurl.com/";

export const apartmentData = createSlice({
  name: "apartment",
  initialState: {
    featuredRooms: [],
  },
  reducers: {
    getRooms: (state, action) => {
      state.featuredRooms = [action.payload];
    },
  },
});

export const getFeaturedRoomsAsync = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://adminhitl-001-site1.ctempurl.com/api/Room"
    );

    dispatch(getRooms(response));
  } catch (err) {
    throw new Error(err);
  }
};

export const ApartmentDataReducer = apartmentData.reducer;
export const { getRooms } = apartmentData.actions;
