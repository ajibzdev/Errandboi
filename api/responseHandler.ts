import axios from "axios";

export const getEndpoint = async (endpoint: string) => {
  try {
    const response = await axios.get(endpoint);

    return response.data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const postToEndpoint = async (endpoint: string, payload: any) => {
  try {
    const response = await axios.post(endpoint, payload);

    return response.data;
  } catch (err: any) {
    console.log(err.message);
  }
};
