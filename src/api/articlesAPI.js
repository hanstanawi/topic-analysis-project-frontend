import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
  },
});

// Exporting the axios instance methods to be called in the store to fetch the data
export default {
  getLatestArticles(limit) {
    return apiClient.get(`/articles?limit=${limit}`);
  },
  searchArticlesWithKeyword(keyword) {
    return apiClient.get(`/keyword-search?keyword=${keyword}`);
  },
  searchArticlesWithArticle(text) {
    return apiClient.get(`/text-search?text=${text}`);
  },
};
