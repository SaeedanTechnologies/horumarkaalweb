// api/apiFunctions.js
import api from "../utils/Api";

import axios from 'axios';



export const generateOtp = async (phone_number) => {
  try {
    const response = await api.post('app/send-otp', { phone_number });
    return response.data; // Assuming the response data is in `data`
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Error occurred');
    } else if (error.request) {
      throw new Error('No response received from server');
    } else {
      throw new Error('Request error: ' + error.message);
    }
  }
};


export const numberverifyOtp = async ({ otp }) => {
  try {
    const response = await api.post("/app/verify-otp", { otp });
    return response;
  } catch (error) {
    throw error;
  }
};

export const userPasswordChange = async (payload) => {
    try {
      const res = await api.post("/auth/register", payload);
      console.log("Response from API:", res);
      return res;
    } catch (err) {
      throw err;
    }
  };
