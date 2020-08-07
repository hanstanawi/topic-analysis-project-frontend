/* eslint-disable no-useless-catch */
/* eslint-disable no-shadow */
import articlesAPI from '../../api/articlesAPI';

const state = {
  articlesList: [],
  searchResultArticlesList: [],
  article: {},
};

const mutations = {
  SET_ARTICLES(state, articles) {
    state.articlesList = articles;
  },
  SET_ARTICLE(state, article) {
    state.article = article;
  },
  SET_SEARCHED_ARTICLES(state, articles) {
    state.searchResultArticlesList = articles;
  },
};

const getters = {
  getArticlesList() {
    return state.articlesList;
  },
  getSearchedArticlesList() {
    return state.searchResultArticlesList;
  },
};

const actions = {
  async getAllArticles({ commit }) {
    try {
      const articles = await articlesAPI.getAllArticles();
      commit('SET_ARTICLES', articles.data);
    } catch (err) {
      throw err;
    }
  },
  getSingleArticle({ commit, state }, articleId) {
    if (articleId === state.article.url) {
      return state.article;
    }
    return articlesAPI.getSingleArticle(articleId)
      .then((res) => {
        commit('SET_ARTICLE', res.data);
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },
  async searchArticlesWithKeyword({ commit }, keyword) {
    try {
      const articles = await articlesAPI.searchArticlesWithKeyword(keyword);
      commit('SET_SEARCHED_ARTICLES', articles.data);
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
