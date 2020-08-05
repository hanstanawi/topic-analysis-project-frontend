/* eslint-disable no-useless-catch */
/* eslint-disable no-shadow */
import { topicsData } from './dummyData';

const state = {
  topics: topicsData,
};

const mutations = {

};

const getters = {
  getTopicsData() {
    return state.topics;
  },
};

const actions = {

};

export default {
  state,
  mutations,
  getters,
  actions,
};
