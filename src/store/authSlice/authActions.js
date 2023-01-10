import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk("auth/register", async (data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const response = await axios.post(
      "http://adminhitl-001-site1.ctempurl.com/api/Guest",
      data,
      config
    );
    return response;
  } catch (error) {
    return error;
  }
});

export const userLogin = createAsyncThunk("auth/register", async (data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
      },
      mode: "no-cors",
    };
    const response = await axios.post(
      "http://adminhitl-001-site1.ctempurl.com/api/Guest/Login",
      data,
      config
    );
    return response;
  } catch (error) {
    return error;
  }
});
