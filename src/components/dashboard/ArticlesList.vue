<template>
  <div>
    <v-card
      max-width="550px"
      height="100%"
      flat
      outlined
      class="mx-auto">
      <!-- TOOLBAR -->
      <v-toolbar color="light-blue darken-2" dark>
        <v-toolbar-title>Top 5 Latest Articles</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <!-- ITEMS -->
      <v-card-text>
        <v-list two-line>
          <template v-for="(article, index) in articlesList">
            <v-list-item
              :key="article.url"
              @click="$emit('open-article-modal', article)"
            >
              <template>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="article.title"
                    class="text-left title font-weight-bold"
                  />
                  <v-list-item-subtitle
                    class="text--primary text-left my-2"
                    v-text="formatDate(article.tp)" />
                  <v-list-item-subtitle
                    class="text--primary"
                    v-text="article.content"
                  />
                </v-list-item-content>
              </template>
            </v-list-item>
            <v-divider v-if="index + 1 < articlesList.length" :key="index" />
          </template>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import moment from 'moment-timezone';

export default {
  name: 'ArticlesList',
  props: {
    articlesList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showArticleDetails: false,
    };
  },
  methods: {
    formatDate(date) {
      if (!date) {
        return '';
      }
      const chineseLocaleDate = moment(date).locale('zh_tw');
      return chineseLocaleDate.format('LLL');
    },
  },
};
</script>

<style></style>
