import axios from "axios";
import API from "./API";

export const getEndpoint = async (endpoint: string, signal: any = null) => {
  try {
    const res = await axios.get(endpoint, { signal: signal });
    return res.data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const postToEndpoint = async (
  endpoint: string,
  payload: any,
  signal: any = null
) => {
  try {
    const response = await axios.post(endpoint, payload, { signal: signal });

    return response.data;
  } catch (err: any) {
    console.log(err);

    console.log("An error has occured while trying to make post request");
  }
};

export const putToEndpoint = async (
  endpoint: any,
  payload: any,
  signal: any = null
) => {
  try {
    const response = await axios.put(endpoint, payload, { signal: signal });

    return response.data;
  } catch (err: any) {
    console.log(err);

    console.log("An error has occured while trying to make put request");
    console.log(err.message);
  }
};

export const deleteToEndpoint = async (
  endpoint: any,
  payload: any = {},
  signal: any = null
) => {
  try {
    const response = await axios.delete(endpoint, {
      data: payload,
      signal: signal,
    });

    return response.data;
  } catch (err: any) {
    console.log(err);

    console.log("An error has occured while trying to make delete request");
    console.log(err.message);
  }
};

export const putWithForm = async (
  endpoint: string,
  userData: any,
  signal: any = null
) => {
  try {
    const response = await axios.put(endpoint, userData, {
      signal: signal,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (err: any) {
    console.log("An error happened while trying to put with form");
    console.log(err);
  }
};

export const postWithForm = async (
  endpoint: string,
  userData: any,
  signal: any = null
) => {
  try {
    const response = await axios.post(endpoint, userData, {
      signal: signal,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (err: any) {
    console.log("An error happened while trying to post with form");
    console.log(err.response);
  }
};

export const patchToEndpoint = async (endpoint: string, data: any) => {
  try {
    const res = await axios.patch(endpoint, data);

    return res.data;
  } catch (err) {
    console.log(err);
    throw new Error("Response Hanlder: patch");
  }
};
