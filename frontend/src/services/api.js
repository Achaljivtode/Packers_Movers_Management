import axios from "axios";

const API_URL = "http://127.0.0.1:8000/";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}register/`, userData);
    return response.data; //success response
  }catch (error){
    return error.response?.data || { error: "something went wrong" };
  }
 
};

export const loginUser = async (loginData) => {
  return axios.post(`${API_URL}login/`, loginData);
};
