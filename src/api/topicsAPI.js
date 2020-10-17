import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
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
