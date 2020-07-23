<template>
  <v-card
    class="text-center ma-1 my-3 mx-auto card-style"
    width="600"
  >
    <v-responsive>
      <v-img :src="news.image" contain></v-img>
    </v-responsive>
    <v-card-title class="title">{{ news.title }}</v-card-title>
    <v-card-text class="text--primary text-left">
      <p>{{ news.content.slice(0, 50) + '...' }}</p>
    </v-card-text>
    <v-divider></v-divider>

  </v-card>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>

</style>
