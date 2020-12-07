<template>
  <v-container
    fluid
  >
    <v-card
      v-if="!loading"
      class="px-2"
      height="100%"
    >
      <v-row
        justify="start"
      >
        <v-col
          cols="7"
          align="end"
        >
          <v-row justify="center">
            <v-col
              cols="12"
              align="center"
              class="pl-3"
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
          <v-row justify="center">
            <v-col
              cols="12"
              align="center"
              class="pl-3"
            >
              <word-cloud-component
                class="my-4"
                :words="wordCloudContent"
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
              <!-- <articles-list
                @open-article-modal="openArticleDetails"
                :articles-list="articlesList"
              /> -->
              <search-history-list
                :keyword-list="searchHistory"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <v-row v-else>
      <v-col cols="12">
        <main-loading
          style="transform: translate(0, 300%)"
        />
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
import LineChart from '../components/charts/LineChart.vue';
// import ArticlesList from '../components/dashboard/ArticlesList.vue';
import ArticleDetailsModal from '../components/dashboard/ArticleDetailsModal.vue';
import MainLoading from '../components/animations/MainLoading.vue';
import WordCloudComponent from '../components/dashboard/WordCloud.vue';
import SearchHistoryList from '../components/dashboard/SearchHistoryList.vue';

export default {
  name: 'Dashboard',
  components: {
    LineChart,
    // ArticlesList,
    ArticleDetailsModal,
    MainLoading,
    WordCloudComponent,
    SearchHistoryList,
  },
  data() {
    return {
      openArticleModal: false,
      article: {},
      loading: false,
    };
  },
  computed: {
    ...mapGetters({
      articlesList: 'getDashboardArticlesList',
      lineChartStats: 'getDashboardLineChartStats',
      wordCloudContent: 'getWordCloudContent',
      searchHistory: 'getSearchHistory',
    }),
  },
  // async mounted() {
  //   this.loading = true;
  //   await this.fetchArticles(5);
  //   this.loading = false;
  // },
  methods: {
    ...mapActions({
      fetchArticles: 'getFiveLatestArticles',
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
