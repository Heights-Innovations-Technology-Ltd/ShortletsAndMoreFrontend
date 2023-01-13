import axios from "axios";
const url = "http://adminhitl-001-site1.ctempurl.com/api/";

export const postFetch = async (api, data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
      },
      mode: "no-cors",
    };

    const response = await axios.post(url + api, data, config);
    return await response;
  } catch (err) {
    throw new Error(err);
  }
};

export const getFetch = async (api) => {
  try {
    const response = await axios.get(url + api);
    return await response;
  } catch (err) {
    throw new Error(err);
  }
};
