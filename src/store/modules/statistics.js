/* eslint-disable no-useless-catch */
/* eslint-disable no-shadow */

const state = {
  dashboardLineChartStats: {
    title: 'Top 3 Topics',
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998], // X-Axis
    series: [ // Y-Axis
      {
        name: 'Topic 1',
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
      },
      {
        name: 'Topic 2',
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
      },
      {
        name: 'Topic 3',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
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
      {
        name: 'series-2',
        data: [30, 50, 20, 60, 30, 10, 90, 100],
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
};

const actions = {

};

export default {
  state,
  mutations,
  getters,
  actions,
};
