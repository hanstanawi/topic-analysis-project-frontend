<template>
  <v-container
    class="my-5 px-10"
    fluid>
    <articles-toolbar
      @updateSearchValue="searchValue = $event"
      @searchKeyword="fetchSearchResults($event)"
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
        v-for="article in searchedArticlesList"
        :key="article.id">
       <article-card :article="article"/>
     </v-col>
   </v-row>
   <v-row v-if="!searchedArticlesList.length">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2">
       <h1>No result</h1>
     </v-col>
   </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ArticleCard from '../components/articles/ArticleCard.vue';
import ArticlesToolbar from '../components/articles/ArticlesToolbar.vue';

export default {
  name: 'ArticlesView',
  data() {
    return {
      searchValue: '',
      searchedResults: false,
    };
  },
  components: {
    ArticlesToolbar,
    ArticleCard,
  },
  computed: {
    ...mapGetters({
      articlesList: 'getArticlesList',
      searchedArticlesList: 'getSearchedArticlesList',
    }),
    filteredList() {
      const searchValue = this.searchValue.toLowerCase();
      if (this.searchValue === '' || !this.searchValue) {
        return this.articlesList;
      }
      // eslint-disable-next-line max-len
      const searchValueFilter = this.articlesList.filter((news) => news.title.toLowerCase().match(searchValue) || news.content.toLowerCase().match(searchValue));
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
      await this.searchArticlesWithKeyword(keyword);
      if (!keyword || keyword === '') {
        this.searchedResults = false;
      }
      this.searchedResults = true;
    },
  },
};
</script>
