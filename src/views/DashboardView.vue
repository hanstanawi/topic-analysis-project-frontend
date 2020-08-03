<template>
  <v-container
    fluid
  >
    <v-row justify="center">
      <v-col cols="7" align="end">
        <v-row justify="space-between">
          <v-col cols="6" align="center">
            <area-chart />
          </v-col>
          <v-col cols="6" align="center">
            <bar-chart />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" align="center">
            <line-chart
              :series="lineChartSeries"
              :height="300"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5" align="center">
        <v-row justify="center">
          <v-col cols="12" align="center">
            <articles-list />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AreaChart from '../components/charts/AreaChart.vue';
import BarChart from '../components/charts/BarChart.vue';
import LineChart from '../components/charts/LineChart.vue';
import ArticlesList from '../components/dashboard/ArticlesList.vue';

export default {
  name: 'Dashboard',
  components: {
    AreaChart,
    BarChart,
    LineChart,
    ArticlesList,
  },
  data() {
    return {
      // Just temprorary series data. Will be removed soon
      lineChartSeries: [
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
    };
  },
};
</script>
