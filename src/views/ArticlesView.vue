<template>
  <v-container
    class="my-5 px-10"
    fluid>
    <div v-if="!loading">
      <articles-toolbar
        @updateSearchValue="searchValue = $event"
        @search-keyword="fetchSearchResults($event)"
      />
      <!-- LATEST ARTICLES -->
      <v-row v-if="!searchedResults">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          v-for="article in filteredList"
          :key="article.id">
          <article-card :article="article"/>
        </v-col>
      </v-row>
      <!-- SEARCHED RESULTS -->
      <v-row v-else>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          v-for="article in filteredList"
          :key="article.id"
        >
          <article-card :article="article"/>
        </v-col>
      </v-row>
      <v-row v-if="!searchedArticlesList.length && searchedResults">
        <v-col
          align="center"
          cols="12"
        >
        <h1>No result</h1>
      </v-col>
      </v-row>
    </div>
    <v-row v-else>
      <v-col>
        <main-loading
          style="transform: translate(0, 200%)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ArticleCard from '../components/articles/ArticleCard.vue';
import ArticlesToolbar from '../components/articles/ArticlesToolbar.vue';
import MainLoading from '../components/animations/MainLoading.vue';

export default {
  name: 'ArticlesView',
  data() {
    return {
      searchValue: '',
      searchedResults: false,
      loading: false,
    };
  },
  components: {
    ArticlesToolbar,
    ArticleCard,
    MainLoading,
  },
  computed: {
    ...mapGetters({
      articlesList: 'getArticlesList',
      searchedArticlesList: 'getSearchedArticlesList',
    }),
    filteredList() {
      if (!this.searchedResults) {
        const searchValue = this.searchValue.toLowerCase();
        if (this.searchValue === '' || !this.searchValue) {
          return this.articlesList;
        }
        // eslint-disable-next-line max-len
        const searchValueFilter = this.articlesList.filter((news) => news.title.toLowerCase().match(searchValue) || news.content.toLowerCase().match(searchValue));
        return searchValueFilter;
      }
      const searchValue = this.searchValue.toLowerCase();
      if (this.searchValue === '' || !this.searchValue) {
        return this.searchedArticlesList;
      }
      // eslint-disable-next-line max-len
      const searchValueFilter = this.searchedArticlesList.filter((news) => news.title.toLowerCase().match(searchValue) || news.content.toLowerCase().match(searchValue));
      return searchValueFilter;
    },
  },
  async created() {
    await this.fetchArticles();
  },
  methods: {
    ...mapActions({
      fetchArticles: 'getAllArticles',
      searchArticlesWithKeyword: 'searchArticlesWithKeyword',
    }),
    async fetchSearchResults(keyword) {
      this.loading = true;
      await this.searchArticlesWithKeyword(keyword);
      if (!keyword || keyword === '') {
        this.searchedResults = false;
      }
      this.loading = false;
      this.searchedResults = true;
    },
  },
};
</script>
