import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/expert";

export const expertRegister = (data) => axios.post(`${API_URL}/register`, data);

export const expertLogin = (data) => axios.post(`${API_URL}/login`, data);

export const expertChangePassword = (data) =>
  axios.post(`${API_URL}/resetpassword`, data);

export const getExpertDetails = (id) => axios.get(`${API_URL}/${id}`);

export const getAllExperts = () => axios.get(`${API_URL}/`);
