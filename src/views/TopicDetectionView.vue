<template>
  <v-container fluid>
    <!-- TOP 5 TOPICS & SOURCE CHART -->
    <v-card flat>
      <v-row justify="space-between">
        <v-col
          cols="5"
          align="start"
        >
          <topics-list
            :topics-list="topics"
          />
        </v-col>
        <v-col cols="7" align="end">
          <pie-chart
            :series="pieChartStats.series"
          />
        </v-col>
      </v-row>
    </v-card>
    <!-- HISTOGRAM & KEYWORDS LIST -->
      <v-row>
      <v-col cols="4">
        <keyword-list />
      </v-col>
      <v-col cols="8">
        <bar-chart />
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
  computed: {
    ...mapGetters({
      pieChartStats: 'getTopicPieChartStats',
      topics: 'getTopicsData',
    }),
  },
};
</script>

<style>

</style>
