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

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import TopicsList from '../components/topicDetection/TopicsList.vue';
import PieChart from '../components/charts/PieChart.vue';

export default {
  name: 'TopicDetectionView',
  components: {
    TopicsList,
    PieChart,
  },
  computed: {
    ...mapGetters({
      pieChartStats: 'getTopicPieChartStats',
      topics: 'getTopicsData',
    }),
  },
  created() {
    console.log(this.topics);
  },
};
</script>

<style>

</style>
