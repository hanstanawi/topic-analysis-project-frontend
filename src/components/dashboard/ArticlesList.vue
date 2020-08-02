<template>
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
      <template v-for="(news, index) in articlesList">
        <v-list-item :key="news.id">
          <template v-slot:default="{ active }">
            <v-list-item-content>
              <v-list-item-title v-text="news.title" class="text-left title"> </v-list-item-title>
              <v-list-item-subtitle class="text--primary" v-text="news.content">
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon v-if="!active" color="grey lighten-1">
                mdi-star_border
              </v-icon>
              <v-icon v-else color="yellow">
                mdi-star
              </v-icon>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider v-if="index + 1 < articlesList.length" :key="index" />
       </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ArticlesList',
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
};
</script>

<style></style>
