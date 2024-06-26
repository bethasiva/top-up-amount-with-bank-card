import axios from 'axios';

const api = axios.create({
  baseURL:  process.env.SERVER_API_URL || 'http://localhost:8000', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
