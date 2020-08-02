/* eslint-disable no-shadow */
import articlesAPI from '../../api/articlesAPI';

const state = {
  articlesList: [],
  article: {},
};

const mutations = {
  SET_ARTICLES(state, articles) {
    state.articlesList = articles;
  },
  SET_ARTICLE(state, article) {
    state.article = article;
  },
};

const getters = {
  getArticlesList() {
    return state.articlesList;
  },
};

const actions = {
  async getAllArticles({ commit }) {
    // eslint-disable-next-line no-useless-catch
    try {
      const articles = await articlesAPI.getAllArticles();
      commit('SET_ARTICLES', articles.data);
    } catch (err) {
      throw err;
    }
  },
  getSingleArticle({ commit, state }, articleId) {
    if (articleId === state.article.id) {
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
};

export default {
  state,
  mutations,
  getters,
  actions,
};
