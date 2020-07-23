<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="news"
      :items-per-page="5"
    >
    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ArticlesList',
  computed: {
    ...mapGetters(['newsData']),
    headers() {
      const headers = [
        {
          text: 'ID',
          value: 'id',
        },
        {
          text: 'Title',
          value: 'title',
        },
        {
          text: 'Content',
          value: 'content',
        },
      ];
      return headers;
    },
    news() {
      return this.newsData;
    },
  },
};
</script>

<style>

</style>
