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
  getAllArticles() {
    return apiClient.get('/articles');
  },
  getSingleArticle(articleId) {
    return apiClient.get(`/article?articleId=${articleId}`);
  },
  searchArticlesWithKeyword(keyword) {
    return apiClient.get(`/search?keyword=${keyword}`);
  },
};
