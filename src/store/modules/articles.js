/* eslint-disable max-len */
/* eslint-disable no-useless-catch */
/* eslint-disable no-shadow */
import articlesAPI from '../../api/articlesAPI';

const state = {
  dashboardArticlesList: [],
  articlesViewList: [],
  searchResultArticlesWithKeyword: {},
  searchResultArticlesWithArticle: {},
  error: false,
};

const mutations = {
  SET_DASHBOARD_ARTICLES(state, articles) {
    state.dashboardArticlesList = articles;
  },
  SET_ARTICLES_VIEW(state, articles) {
    state.articlesViewList = articles;
  },
  SET_SEARCHED_KEYWORD_ARTICLES(state, articles) {
    state.searchResultArticlesWithKeyword = articles;
  },
  SET_SEARCHED_ARTICLES_LIST(state, articles) {
    state.searchResultArticlesWithArticle = articles;
  },
  CLEAR_SEARCHED_ARTICLES_LIST(state) {
    state.searchResultArticlesWithKeyword = {};
    state.searchResultArticlesWithArticle = {};
    state.error = false;
  },
  SET_ERROR(state) {
    state.error = true;
  },
};

const getters = {
  getDashboardArticlesList() {
    return state.dashboardArticlesList;
  },
  getArticlesViewList() {
    return state.articlesViewList;
  },
  getSearchedArticlesWithKeyword() {
    return state.searchResultArticlesWithKeyword.articlesResult ? state.searchResultArticlesWithKeyword.articlesResult : [];
  },
  getSearchedArticlesWithArticle() {
    return state.searchResultArticlesWithArticle.articlesResult ? state.searchResultArticlesWithArticle.articlesResult : [];
  },
  getSearchedArticlesWithKeywordTime() {
    return state.searchResultArticlesWithKeyword.timeTaken ? state.searchResultArticlesWithKeyword.timeTaken.toFixed(2) : null;
  },
  getSearchedArticlesWithArticleTime() {
    return state.searchResultArticlesWithArticle.timeTaken ? state.searchResultArticlesWithArticle.timeTaken.toFixed(2) : null;
  },
  getErrorState() {
    return state.error;
  },
};

const actions = {
  async getFiveLatestArticles({ commit }, limit) {
    try {
      const articles = await articlesAPI.getLatestArticles(limit);
      commit('SET_DASHBOARD_ARTICLES', articles.data);
    } catch (err) {
      throw err;
    }
  },
  async getTenLatestArticles({ commit }, limit) {
    try {
      const articles = await articlesAPI.getLatestArticles(limit);
      commit('SET_ARTICLES_VIEW', articles.data);
    } catch (err) {
      throw err;
    }
  },
  async searchArticlesWithKeyword({ commit }, keyword) {
    try {
      const articles = await articlesAPI.searchArticlesWithKeyword(keyword);
      commit('CLEAR_SEARCHED_ARTICLES_LIST');
      commit('SET_SEARCHED_KEYWORD_ARTICLES', articles.data);
    } catch (err) {
      commit('SET_ERROR');
      console.log(err);
    }
  },
  async searchArticlesWithArticle({ commit }, text) {
    try {
      const articles = await articlesAPI.searchArticlesWithArticle(text);
      commit('CLEAR_SEARCHED_ARTICLES_LIST');
      commit('SET_SEARCHED_ARTICLES_LIST', articles.data);
    } catch (err) {
      commit('SET_ERROR');
      console.log(err);
    }
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
