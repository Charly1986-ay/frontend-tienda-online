import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: `${BASE_URL}`,
  /* headers: {
    'Content-Type': 'application/json',
  } */
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');

  if (token) {
    config.headers.Authorization = `bearer ${token}`;
  }
  return config;
});

export { api };