import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4001',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  config => {
    // Enable loading spinner or skeleton UI

    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    console.log('Request Interceptor : Request sent');
    return config;
  },
  error => {
    console.error('Request Interceptor: Request error');
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    // Disable loading spinner or skeleton UI
    console.log('Response Interceptor: Response received');
    return response;
  },
  error => {
    // if (error.response.status === 401) {
    //   window.location.href = '/login';
    // }
    console.error('Response Interceptor: Response error');
    return Promise.reject(error);
  },
);

export default instance;
