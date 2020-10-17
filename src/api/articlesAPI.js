import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
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
