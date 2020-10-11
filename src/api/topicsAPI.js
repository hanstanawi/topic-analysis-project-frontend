import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:5000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
  },
});

export default {
  getTopicsData() {
    return apiClient.get('/topic-detection');
  },
};
