import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.180:3000'  // URL do seu backend
});

export default api;
