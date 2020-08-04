<template>
  <v-container
    fluid
  >
    <v-row
      justify="start">
      <v-col
        cols="7"
        align="end"
      >
        <v-row justify="space-between">
          <v-col
            cols="6"
            align="center"
          >
            <!-- MOST TALKED TOPICS CHART -->
            <area-chart
              :series="areaChartStats.series"
              :categories="areaChartStats.categories"
              :title="areaChartStats.title"
            />
          </v-col>
          <v-col
            cols="6"
            align="center"
          >
            <!-- RECENT SEARCHED TOPICS -->
            <bar-chart
              :series="barChartStats.series"
              :categories="barChartStats.categories"
              :title="barChartStats.title"
            />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col
            cols="12"
            align="center"
          >
            <!-- TOP 3 TOPICS -->
            <line-chart
              :series="lineChartStats.series"
              :categories="lineChartStats.categories"
              :title="lineChartStats.title"
              :height="300"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="5"
        align="center"
      >
        <v-row justify="center">
          <v-col
            cols="12"
            align="center"
          >
            <articles-list
              @openArticleModal="openArticleDetails"
              :articles-list="articlesList"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <article-details-modal
      :article="article"
      :show-article-details="openArticleModal"
      @close="hideArticleDetails"
    />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AreaChart from '../components/charts/AreaChart.vue';
import BarChart from '../components/charts/BarChart.vue';
import LineChart from '../components/charts/LineChart.vue';
import ArticlesList from '../components/dashboard/ArticlesList.vue';
import ArticleDetailsModal from '../components/dashboard/ArticleDetailsModal.vue';

export default {
  name: 'Dashboard',
  components: {
    AreaChart,
    BarChart,
    LineChart,
    ArticlesList,
    ArticleDetailsModal,
  },
  data() {
    return {
      openArticleModal: false,
      article: {},
    };
  },
  computed: {
    ...mapGetters({
      articlesList: 'getArticlesList',
      lineChartStats: 'getDashboardLineChartStats',
      barChartStats: 'getDashboardBarChartStats',
      areaChartStats: 'getDashboardAreaChartStats',
    }),
  },
  async created() {
    await this.fetchArticles();
    console.log(this.barChartStats);
  },
  methods: {
    ...mapActions({
      fetchArticles: 'getAllArticles',
    }),
    openArticleDetails(article) {
      this.article = article;
      this.openArticleModal = true;
    },
    hideArticleDetails() {
      this.openArticleModal = false;
    },
  },
};
</script>
