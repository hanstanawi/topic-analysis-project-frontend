/* eslint-disable max-len */
/* eslint-disable no-useless-catch */
/* eslint-disable no-shadow */
import { wordCloud, historyList } from './dummyData';

const state = {
  dashboardLineChartStats: {
    title: 'Search Frequency Last 24 hours',
    categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'], // X-Axis
    series: [ // Y-Axis
      {
        name: '韓國瑜',
        data: [0, 2, 9, 7, 8, 10, 2, 1, 4, 0, 0, 0, 3, 4, 1, 4, 2, 5, 10, 4, 8, 6, 4, 2, 9],
      },
      {
        name: '肺炎',
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 20, 10, 2, 10, 3, 5, 10, 4, 8, 6, 4, 2, 9],
      },
      {
        name: '國昌',
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 20, 10, 2, 10, 3, 5, 10, 4, 8, 6, 4, 2, 9],
      },
      {
        name: '高雄',
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 20, 10, 2, 10, 3, 5, 10, 4, 8, 6, 4, 2, 9],
      },
      {
        name: '稅',
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 20, 10, 2, 10, 3, 5, 10, 4, 8, 6, 4, 2, 9],
      },
    ],
  },
  dashboardBarChartStats: {
    title: 'Your Recent Searches',
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    series: [
      {
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91],
      },
    ],
  },
  dashboardAreaChartStats: {
    title: 'Most Talked Topics',
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    series: [
      {
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91],
      },
    ],
  },
  topicPieChartStats: {
    title: 'Top 5 Sources',
    series: [44, 55, 41, 17, 15],
  },
  topicBarChartStats: {
    series: [
      {
        name: 'Apple',
        data: [44, 55, 41, 37, 22, 43, 21, 20, 50, 20],
      },
      {
        name: 'Banana',
        data: [53, 32, 33, 52, 13, 43, 32, 20, 60, 10],
      },
      {
        name: 'Orange',
        data: [12, 17, 11, 9, 15, 11, 20, 15, 12, 11],
      },
      {
        name: 'Watermelon',
        data: [9, 7, 5, 8, 6, 9, 4, 20, 11, 15],
      },
      {
        name: 'Grape',
        data: [25, 12, 19, 32, 25, 24, 10, 2, 10, 30],
      },
    ],
    stacked: true,
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
  },
  wordCloudContent: wordCloud,
  searchHistory: historyList,
};

const mutations = {
};

const getters = {
  getDashboardLineChartStats() {
    return state.dashboardLineChartStats;
  },
  getDashboardBarChartStats() {
    return state.dashboardBarChartStats;
  },
  getDashboardAreaChartStats() {
    return state.dashboardAreaChartStats;
  },
  getTopicPieChartStats() {
    return state.topicPieChartStats;
  },
  getTopicBarChartStats() {
    return state.topicBarChartStats;
  },
  getWordCloudContent() {
    const wordsArray = Object.entries(state.wordCloudContent);
    return wordsArray;
  },
  getSearchHistory() {
    return state.searchHistory;
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
