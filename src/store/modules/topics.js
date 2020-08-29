/* eslint-disable no-useless-catch */
/* eslint-disable no-shadow */
import { topicsData } from './dummyData';
import topicsAPI from '../../api/topicsAPI';

const state = {
  topics: topicsData,
};

const mutations = {
  SET_TOPICS(state, topics) {
    const alteredTopics = topics.map((topic) => {
      let detectKeywordsList;
      let isKeywordsList;
      let realKeywordsList;
      if (topic.detect_kw_list) {
        detectKeywordsList = topic.detect_kw_list.split(' ');
      }
      if (topic.is_keywords) {
        isKeywordsList = topic.is_keywords.split('').map((keyword) => !!(+keyword));
      }
      if (topic.real_kw_list) {
        realKeywordsList = topic.real_kw_list.split('');
      }
      return {
        ...topic,
        detect_kw_list: detectKeywordsList,
        is_keywords: isKeywordsList,
        real_kw_list: realKeywordsList,
      };
    });

    console.log(alteredTopics);
    state.topics = topics;
  },
};

const getters = {
  getTopicsData() {
    return state.topics;
  },
};

const actions = {
  async fetchTopics({ commit }) {
    try {
      const topicsData = await topicsAPI.getTopicsData();
      commit('SET_TOPICS', topicsData.data);
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
