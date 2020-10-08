<template>
  <v-container
    class="my-5 px-10"
    fluid
    v-if="!isArticleOpened"
  >
    <div v-if="!loading">
      <articles-toolbar
        @updateSearchValue="searchValue = $event"
        @search-keyword="fetchKeywordSearchResults($event)"
        @search-text="fetchTextSearchResults($event)"
      />
      <!-- LATEST ARTICLES -->
      <div v-if="!searchedResults">
        <span class="text-left text-h6 ml-4">Latest Articles</span>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
            v-for="article in filteredList"
            :key="article.id">
            <article-card
              :article="article"
              @articleSelected="openArticleDetails"
            />
          </v-col>
        </v-row>
      </div>
      <!-- SEARCHED RESULTS -->
      <div v-else>
        <v-row
          justify="space-between"
          class="mx-4 py-0"
        >
          <div class="text-left text-h6">Search Results</div>
          <p
            class="back-button text-left body-1"
            @click="searchedResults = false"
          >
            Back to Latest Articles
          </p>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
            v-for="article in filteredList"
            :key="article.id"
          >
            <article-card
              :article="article"
              @articleSelected="openArticleDetails"
            />
          </v-col>
        </v-row>
      </div>
      <v-row
        v-if="!searchedKeywordArticlesList.length
          && !searchedTextArticlesList.length
          && searchedResults"
      >
        <v-col
          align="center"
          cols="12"
        >

          <div
            class="text-h4 font-weight-bold"
            style="transform: translate(0, 500%)"
          >
            <v-icon
              x-large
              color="black"
              class="font-weight-bold"
            >
              mdi-magnify
            </v-icon>
            No result
          </div>
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
  <v-container v-else>
    <articles-details
      @closeArticleDetails="closeDetails"
      :article="articleOpened"
    />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ArticleCard from '../components/articles/ArticleCard.vue';
import ArticlesToolbar from '../components/articles/ArticlesToolbar.vue';
import ArticlesDetails from '../components/articles/ArticlesDetails.vue';
import MainLoading from '../components/animations/MainLoading.vue';

export default {
  name: 'ArticlesView',
  data() {
    return {
      searchValue: '',
      searchedResults: false,
      loading: false,
      articleOpened: {},
      isArticleOpened: false,
    };
  },
  components: {
    ArticlesToolbar,
    ArticleCard,
    MainLoading,
    ArticlesDetails,
  },
  computed: {
    ...mapGetters({
      articlesList: 'getArticlesViewList',
      searchedKeywordArticlesList: 'getSearchedArticlesWithKeyword',
      searchedTextArticlesList: 'getSearchedArticlesWithArticle',
    }),
    searchKeywordResultList: {
      get() {
        return this.searchedKeywordArticlesList;
      },
      set(newResult) {
        return newResult;
      },
    },
    searchTextResultList: {
      get() {
        return this.searchedTextArticlesList;
      },
      set(newResult) {
        return newResult;
      },
    },
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
      if (this.searchedResults && this.searchKeywordResultList.length) {
        const searchValue = this.searchValue.toLowerCase();
        if (this.searchValue === '' || !this.searchValue) {
          return this.searchKeywordResultList;
        }
        // eslint-disable-next-line max-len
        const searchValueFilter = this.searchKeywordResultList.filter((news) => news.title.toLowerCase().match(searchValue) || news.content.toLowerCase().match(searchValue));
        return searchValueFilter;
      }
      const searchValue = this.searchValue.toLowerCase();
      if (this.searchValue === '' || !this.searchValue) {
        return this.searchTextResultList;
      }
      // eslint-disable-next-line max-len
      const searchValueFilter = this.searchTextResultList.filter((news) => news.title.toLowerCase().match(searchValue) || news.content.toLowerCase().match(searchValue));
      return searchValueFilter;
    },
  },
  async created() {
    this.loading = true;
    await this.fetchArticles(10);
    this.loading = false;
  },
  methods: {
    ...mapActions({
      fetchArticles: 'getTenLatestArticles',
      searchArticlesWithKeyword: 'searchArticlesWithKeyword',
      searchArticlesWithArticle: 'searchArticlesWithArticle',
    }),
    async fetchKeywordSearchResults(keyword) {
      this.loading = true;
      await this.searchArticlesWithKeyword(keyword);
      if (!keyword || keyword === '') {
        this.searchKeywordResultList = [];
      }
      this.loading = false;
      this.searchedResults = true;
    },
    async fetchTextSearchResults(keyword) {
      this.loading = true;
      await this.searchArticlesWithArticle(keyword);
      if (!keyword || keyword === '') {
        this.searchTextResultList = [];
      }
      this.loading = false;
      this.searchedResults = true;
    },
    openArticleDetails(article) {
      this.$router.push(`/articles/${article.url}`);
      this.articleOpened = article;
      this.isArticleOpened = true;
    },
    closeDetails() {
      this.$router.push('/articles');
      this.isArticleOpened = false;
    },
  },
};
</script>

<style scoped>
.back-button {
  cursor: pointer;
}
.back-button:hover {
  text-decoration: underline;
}
</style>
