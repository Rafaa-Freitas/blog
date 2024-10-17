import axios from 'axios';

const api = axios.create({
  baseURL: 'https://blog-json-server-neon.vercel.app/',
});

export default api;
