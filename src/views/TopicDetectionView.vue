<template>
  <v-container fluid>
    <!-- TOP 5 TOPICS & SOURCE CHART -->
    <v-card flat height="400">
      <v-row justify="space-between">
        <v-col cols="5" align="start">
          <topics-list :topics-list="topics" @selected-topic="selectTopicDetails" />
        </v-col>
        <v-col cols="7" align="end">
          <pie-chart :series="pieChartStats.series" />
        </v-col>
      </v-row>
    </v-card>
    <!-- HISTOGRAM & KEYWORDS LIST -->
    <v-row>
      <v-col cols="2">
        <keyword-list :topic="topic" />
      </v-col>
      <v-col cols="10">
        <v-card flat>
          <bar-chart
            :categories="barChartStats.categories"
            :series="barChartStats.series"
            :height="350"
            :stacked="barChartStats.stacked"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import PieChart from '../components/charts/PieChart.vue';
import BarChart from '../components/charts/BarChart.vue';
import TopicsList from '../components/topicDetection/TopicsList.vue';
import KeywordList from '../components/topicDetection/KeywordList.vue';

export default {
  name: 'TopicDetectionView',
  components: {
    TopicsList,
    PieChart,
    KeywordList,
    BarChart,
  },
  data() {
    return {
      topic: {},
    };
  },
  computed: {
    ...mapGetters({
      pieChartStats: 'getTopicPieChartStats',
      barChartStats: 'getTopicBarChartStats',
      topics: 'getTopicsData',
    }),
  },
  methods: {
    selectTopicDetails(topic) {
      this.topic = topic;
    },
  },
};
</script>

<style>
</style>
