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

export const fetchServiceById = async (id) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/services/${id}/`);
    return response.data; // Return the single service
  } catch (error) {
    console.error("Error fetching service by ID:", error);
    return null;
  }
};

export const fetchAgents = async () => {
  try {
    const response = await axios.get(`${API_URL}find-agent/`, {
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
    const response = await axios.get(`${API_URL}agent-detail/${agentId}/`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching agent details", error.response?.data || error);
    throw error;
  }
};

export const submitFeedback = async (rating, feedback) => {
  try {
    const response = await axios.post(
      `${API_URL}feedback/`,
      { select_rating: rating, feedback }, // Send only rating & feedback
      {
        headers: { Authorization: `Bearer ${getToken()}` }, // Fetch token automatically
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error submitting feedback:", error.response?.data || error);
    throw error;
  }
};
export const fetchAllFeedback = async () => {
  try {
    const response = await axios.get(`${API_URL}get_feedback/`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching feedback:", error.response?.data || error);
    return [];
  }
};

export const fetchFeedbackByUser = async (userId) => {
  try {
    const response = await axios.get(
      `${API_URL}get_feedback/?user_id=${userId}`,
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching user feedback:",
      error.response?.data || error
    );
    return [];
  }
};

export const fetchAllCustomers = async () => {
  try {
    const response = await axios.get(`${API_URL}customers/`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    return [];
  }
};

// Delete a customer (Only Admin)
export const deleteCustomer = async (customerId) => {
  try {
    await axios.delete(`${API_URL}/customers/${customerId}/delete/`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    return true;
  } catch (error) {
    console.error("Error deleting customer:", error);
    return false;
  }
};

export const fetchCustomerById = async (customerId) => {
  try {
    const response = await axios.get(`${API_URL}customers/${customerId}/`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching customer details:", error);
    return null;
  }
};

export const fetchUserProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}user/profile/`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};

export const updateUserProfile = async (userData) => {
  try {
    const response = await axios.put(`${API_URL}user/profile/`, userData, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    return error.response?.data || { error: "Something went wrong" };
  }
};
