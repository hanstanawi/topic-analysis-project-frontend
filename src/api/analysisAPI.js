import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:5000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
  },
});

// Exporting the axios instance methods to be called in the store to fetch and store the data
export default {
  postSearchKeyword(keyword) {
    return apiClient.post('/keyword-search', keyword);
  },
  getSearchHistoryFrequencyList() {
    return apiClient.get('/frequency-list');
  },
  getWordCloudData() {
    return apiClient.get('/wordcloud');
  },
  getFrequencyData(keywordId) {
    return apiClient.get(`/frequency-data?id=${keywordId}`);
  },
};
