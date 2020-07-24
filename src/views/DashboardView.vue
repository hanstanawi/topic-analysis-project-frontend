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
            <line-chart />
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
};
</script>
