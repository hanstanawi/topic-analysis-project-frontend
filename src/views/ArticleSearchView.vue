<template>
  <v-container
    class="my-5 px-10"
    fluid
  >
    <div v-if="!loading">
      <!-- TEXT EDITOR -->
      <div v-if="!searchedResults">
        <v-row justify="center">
          <v-col
            cols="10"
          >
            <v-card height="76vh" flat>
              <vue-editor
                v-model="content"
                placeholder="Enter a long text or article"
                style="background-color: #fff; height: 70vh; border: none"
              />
              <v-divider/>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="mr-5 white--text"
                  color="light-blue darken-2"
                  @click="fetchSearchResults(strippedContent); content = ''"
                >
                Search
              </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <!-- SEARCHED RESULTS -->
      <div v-if="searchedResults && !isArticleOpened">
        <v-row
          justify="space-between"
          class="mx-4 py-0"
        >
          <div
            class="text-left text-h6"
            style="transform: translate(125%, 0); position: relative;"
          >
            Search Results
          </div>
          <div>Search Duration:
            <span class="font-weight-bold"> {{ searchedArticlesListTime }}</span>s
          </div>
          <p
            class="back-button text-left body-1"
            style="transform: translate(-120%, 0); position: relative;"
            @click="searchedResults = false"
          >
            Back to Text Editor
          </p>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            v-for="article in searchResultList"
            :key="article.id"
          >
            <article-card
              :article="article"
              @articleSelected="openArticleDetails"
            />
          </v-col>
        </v-row>
      </div>
      <div v-if="isArticleOpened">
        <article-details
          @closeArticleDetails="closeDetails"
          :article="articleOpened"
        />
      </div>
      <v-row v-if="(!searchedArticlesList.length && searchedResults) || errorState">
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { VueEditor } from 'vue2-editor';
import MainLoading from '../components/animations/MainLoading.vue';
import ArticleCard from '../components/articles/ArticleCard.vue';
import ArticleDetails from '../components/articles/ArticlesDetails.vue';

export default {
  name: 'ArticleSearchView',
  components: {
    VueEditor,
    MainLoading,
    ArticleCard,
    ArticleDetails,
  },
  data() {
    return {
      content: '',
      loading: false,
      searchedResults: false,
      articleOpened: {},
      isArticleOpened: false,
    };
  },
  computed: {
    ...mapGetters({
      searchedArticlesList: 'getSearchedArticlesWithArticle',
      searchedArticlesListTime: 'getSearchedArticlesWithArticleTime',
      errorState: 'getErrorState',
    }),
    strippedContent() {
      const regex = /(<([^>]+)>)/ig;
      return this.content.replace(regex, '');
    },
    searchResultList: {
      get() {
        return this.searchedArticlesList;
      },
      set(newResult) {
        return newResult;
      },
    },

  },
  methods: {
    ...mapActions({
      searchArticlesWithKeyword: 'searchArticlesWithArticle',
    }),
    async fetchSearchResults(text) {
      this.loading = true;
      await this.searchArticlesWithKeyword(text);
      if (!text || text === '') {
        this.searchResultList = [];
      }
      this.loading = false;
      this.searchedResults = true;
    },
    openArticleDetails(article) {
      this.$router.push(`/articles-search/${article.url}`);
      this.articleOpened = article;
      this.isArticleOpened = true;
    },
    closeDetails() {
      this.$router.push('/articles-search');
      this.isArticleOpened = false;
    },
  },
};
</script>

<style scoped>
@import "~vue2-editor/dist/vue2-editor.css";
.back-button {
  cursor: pointer;
}
.back-button:hover {
  text-decoration: underline;
}
</style>
