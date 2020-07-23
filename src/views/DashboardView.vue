<template>
  <v-container
    class="my-2"
    fluid
  >
    <h1 class="mx-4">Dashboard</h1>
    <v-row>
      <v-col cols="3" class="mx-4">
        <area-chart />
      </v-col>
      <v-col cols="3" class="mx-4">
        <pie-chart />
      </v-col>
      <v-col cols="5" class="mx-4">
        <articles-list />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AreaChart from '../components/charts/AreaChart.vue';
import PieChart from '../components/charts/PieChart.vue';
import ArticlesList from '../components/dashboard/ArticlesList.vue';

export default {
  name: 'Dashboard',
  components: {
    AreaChart,
    PieChart,
    ArticlesList,
  },
};
</script>
