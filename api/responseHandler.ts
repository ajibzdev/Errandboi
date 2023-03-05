import axios from "axios";

export const getEndpoint = async (endpoint: string) => {
  try {
    const res = await axios.get(endpoint);
    return res.data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const postToEndpoint = async (endpoint: string, payload: any) => {
  try {
    const response = await axios.post(endpoint, payload);

    return response.data;
  } catch (err: any) {
    console.log(err);

    console.log("An error has occured while trying to make post request");
  }
};

export const putToEndpoint = async (endpoint: any, payload: any) => {
  try {
    const response = await axios.put(endpoint, payload);

    return response.data;
  } catch (err: any) {
    console.log(err);

    console.log("An error has occured while trying to make put request");
    console.log(err.message);
  }
};

export const deleteToEndpoint = async (endpoint: any, payload: any = {}) => {
  try {
    console.log(payload);
    const response = await axios.delete(endpoint, {
      data: payload,
    });

    return response.data;
  } catch (err: any) {
    console.log(err);

    console.log("An error has occured while trying to make delete request");
    console.log(err.message);
  }
};

export const putWithForm = async (endpoint: string, userData: any) => {
  try {
    const response = await axios.put(endpoint, userData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (err: any) {
    console.log("An error happened while trying to put with form");
    console.log(err.message);
  }
};

export const postWithForm = async (endpoint: string, userData: any) => {
  try {
    const response = await axios.post(endpoint, userData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (err: any) {
    console.log("An error happened while trying to post with form");
    console.log(err.message);
  }
};
