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
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="mr-5"
                  color="primary"
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
            Back to Text Editor
          </p>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
            v-for="article in searchResultList"
            :key="article.id"
          >
            <article-card :article="article"/>
          </v-col>
        </v-row>
      </div>
      <v-row v-if="!searchedArticlesList.length && searchedResults">
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

export default {
  name: 'ArticleSearchView',
  components: {
    VueEditor,
    MainLoading,
    ArticleCard,
  },
  data() {
    return {
      content: '',
      loading: false,
      searchedResults: false,
    };
  },
  computed: {
    ...mapGetters({
      searchedArticlesList: 'getSearchedArticlesWithArticle',
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
