import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFetch, postFetch } from "../../utils/apiClient";

export const registerUser = createAsyncThunk("auth/register", async (data) => {
  try {
    const response = await postFetch("Guest", data);
    return response;
  } catch (error) {
    return error;
  }
});

export const userLogin = createAsyncThunk("auth/login", async (data) => {
  try {
    const response = await postFetch("Guest/Login", data);
    return response;
  } catch (error) {
    return error;
  }
});

export const getFeaturedRooms = createAsyncThunk("allrooms", async () => {
  try {
    const response = await getFetch("Room");
    return response;
  } catch (err) {
    throw new Error(err);
  }
});

export const getApartment = createAsyncThunk("apartment", async () => {
  try {
    const response = await getFetch("Apartment");
    return response;
  } catch (error) {
    return error;
  }
});

export const getRoomType = createAsyncThunk("roomType", async (id) => {
  try {
    const response = await getFetch(`Room/room-types/${id}`);
    return response;
  } catch (error) {
    return error;
  }
});
