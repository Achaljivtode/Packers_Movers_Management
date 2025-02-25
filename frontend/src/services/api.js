import axios from "axios";

const API_URL = "http://127.0.0.1:8000/";

const getToken = () => localStorage.getItem("token");

export const fetchRolesChoices = async () => {
  try {
    const response = await axios.get(`${API_URL}register/`);
    return response.data.register_as_choices || [];
  } catch (error) {
    console.error("Error fetching role choices:", error);
    return [];
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}register/`, userData);
    return response.data; //success response
  } catch (error) {
    return error.response?.data || { error: "something went wrong" };
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(
      `${API_URL}login/`,
      loginData
      // {
      // username: loginData.email,
      // password: loginData.password,
      // }
    );
    return response.data; // Return successful response
  } catch (error) {
    return error.response?.data || error.message;
  }
};

export const fetchOrders = async () => {
  try {
    const response = await axios.get(`${API_URL}orders/`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    console.log("Fetched Orders:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error fetching orders", error.response?.data || error);
    throw error;
  }
};

export const placeOrder = async (orderData) => {
  try {
    const response = await axios.post(
      `${API_URL}orders/create/`,

      {
        ...orderData,
        select_service: parseInt(orderData.select_service), //send service id
      },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
    console.log("order placed succesfuuly");
    return response.data;
  } catch (error) {
    console.error("Error Placing Order:", error.response?.data || error);
    throw error;
  }
};

export const updateOrder = async (orderId, status) => {
  try {
    await axios.post(
      `${API_URL}orders/${orderId}/update/`,
      { status },
      { headers: { Authorization: `Bearer ${getToken()}` } }
    );
    return { success: true };
  } catch (error) {
    console.error("Error updating order:", error.response?.data || error);
    throw error;
  }
};

export const fetchServices = async () => {
  try {
    const response = await axios.get(`${API_URL}services/`);
    return response.data; //Return list of Services
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

export const registerService = async (serviceData) => {
  try {
    const response = await axios.post(
      `${API_URL}services/register/`,
      serviceData,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    // return { success: true };
    alert("Service Registration Successfull");
    return response.data;
  } catch (error) {
    console.error("Error registering service:", error.response?.data || error);
    alert("Error Registering Service", error);
    return error.response?.data || { error: "Something went wrong" };
  }
};

export const fetchAgents = async () => {
  try {
    const response = await axios.get(`${API_URL}search-agents/`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    console.log("Fetched Agents:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error fetching orders", error.response?.data || error);
    throw error;
  }
};

export const fetchAgentDetails = async (agentId) => {
  try {
    const response = await axios.get(`${API_URL}agent/${agentId}/`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching agent details", error.response?.data || error);
    throw error;
  }
};
