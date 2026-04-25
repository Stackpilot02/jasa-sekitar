import axios from 'axios';

// Gunakan IP lokal Anda agar bisa diakses dari HP di jaringan yang sama
const API_BASE_URL = 'http://192.168.1.102:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor untuk menambahkan token jika ada
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
