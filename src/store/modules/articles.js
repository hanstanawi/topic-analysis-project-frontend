/* eslint-disable no-useless-catch */
/* eslint-disable no-shadow */
import articlesAPI from '../../api/articlesAPI';

const state = {
  dashboardArticlesList: [],
  articlesViewList: [],
  searchResultArticlesWithKeyword: [],
  searchResultArticlesWithArticle: [],
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
    state.searchResultArticlesWithKeyword = [];
    state.searchResultArticlesWithArticle = [];
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
    return state.searchResultArticlesWithKeyword;
  },
  getSearchedArticlesWithArticle() {
    return state.searchResultArticlesWithArticle;
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
      // eslint-disable-next-line no-underscore-dangle
      // const articlesArray = articles.data.map((article) => article._source);
      commit('CLEAR_SEARCHED_ARTICLES_LIST');
      commit('SET_SEARCHED_KEYWORD_ARTICLES', articles.data);
    } catch (err) {
      throw err;
    }
  },
  async searchArticlesWithArticle({ commit }, text) {
    try {
      const articles = await articlesAPI.searchArticlesWithArticle(text);
      // eslint-disable-next-line no-underscore-dangle
      // const articlesArray = articles.data.map((article) => article._source);
      commit('CLEAR_SEARCHED_ARTICLES_LIST');
      commit('SET_SEARCHED_ARTICLES_LIST', articles.data);
    } catch (err) {
      throw err;
    }
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
