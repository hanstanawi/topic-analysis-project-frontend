<template>
<div>
  <v-card max-width="400px" class="mx-auto">
    <!-- TOOLBAR -->
    <v-toolbar
      color="primary"
      dark
    >
      <v-toolbar-title>Latest Articles</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- ITEMS -->
    <v-card-text>
      <v-list two-line>
      <template v-for="(article, index) in articlesList">
        <v-list-item :key="article.id">
          <template>
            <v-list-item-content>
              <v-list-item-title
                v-text="article.title"
                class="text-left title"
              >
              </v-list-item-title>
              <v-list-item-subtitle class="text--primary" v-text="article.content">
              </v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-divider v-if="index + 1 < articlesList.length" :key="index" />
       </template>
      </v-list>
    </v-card-text>
  </v-card>
  <!-- <article-details-modal
    :showArticleDetails="showArticleDetails"
    :article="news"
  /> -->
</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import ArticleDetailsModal from './ArticleDetailsModal.vue';

export default {
  name: 'ArticlesList',
  components: {
    // ArticleDetailsModal,
  },
  data() {
    return {
      showArticleDetails: false,
    };
  },
  computed: {
    ...mapGetters({
      articlesList: 'getArticlesList',
    }),
    newsList() {
      const modifiedNewsData = this.newsData.slice(0, 8).map((news) => ({
        ...news,
        content: `${news.content.slice(0, 50)}...`,
      }));
      return modifiedNewsData;
    },
  },
  async created() {
    await this.fetchArticles();
  },
  methods: {
    ...mapActions({
      fetchArticles: 'getAllArticles',
    }),
  },
};
</script>

<style></style>
