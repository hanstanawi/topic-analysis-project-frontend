import Vue from 'vue';
import Vuex from 'vuex';
import articles from './modules/articles';
import statistics from './modules/statistics';
import topics from './modules/topics';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    articles,
    statistics,
    topics,
  },
});
