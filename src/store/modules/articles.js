import newsData from './dummyData';

const state = {
  newsData,
};

const mutations = {

};

const getters = {
  newsData() {
    console.log(state.newsData);
    return state.newsData;
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
