<template>
  <v-card
    class="text-center ma-1 my-3 mx-auto card-style"
    width="1000px"
    height="92%"
  >
    <v-responsive>
      <v-img :src="article.image" contain />
    </v-responsive>
    <!-- <router-link
      tag="p"
      :to="{ name: 'ArticleDetails', params: { id: article.id } }"
    > -->
      <v-card-title
        class="article-title pb-0 text-left font-weight-bold"
        @click="selectArticle"
      >
        {{ article.title }}
      </v-card-title>
    <!-- </router-link> -->
    <v-row
      class="my-0 py-0"
    >
      <v-col
        cols="12"
        align="start"
        class="ml-3 my-0 py-0"
      >
        <span class="text-caption">
          {{ formatDate(article.tp) }}
        </span>
      </v-col>
    </v-row>
    <v-card-text class="text--primary text-left pb-0">
      <p class="pb-0">{{ article.content.slice(0, 50) + "..." }}</p>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-chip
        small
        class="mx-1 my-2 white--text"
        color="light-blue darken-2"
      >
        {{ article.board }}
      </v-chip>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from 'moment-timezone';

export default {
  name: 'ArticleCard',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(date) {
      if (!date) {
        return '';
      }
      const chineseLocaleDate = moment(date).locale('zh_tw');
      return chineseLocaleDate.format('LLL');
    },
    selectArticle() {
      this.$emit('articleSelected', this.article);
    },
  },
};
</script>

<style scoped>
.article-title {
  cursor: pointer;
}
.article-title:hover {
  text-decoration: underline;
}
</style>
