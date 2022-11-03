import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

instance.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token');
  if (!config?.headers) {
    throw new Error(
      `Expected 'config' and 'config.headers' not to be undefined`
    );
  }
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});
export default instance;
