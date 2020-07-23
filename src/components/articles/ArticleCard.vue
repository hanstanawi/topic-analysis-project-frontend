<template>
  <v-card
    class="text-center ma-1 my-3 mx-auto card-style"
    width="1000px"
  >
    <v-responsive>
      <v-img
        :src="news.image"
        contain
      />
    </v-responsive>
    <v-card-title
      class="title"
    >
      {{ news.title }}
    </v-card-title>
    <v-row
      justify="start"
      class="my-0 py-0"
    >
      <v-col
        cols="12"
        align="start"
        class="ml-3 my-0 py-0"
      >
        <v-chip
          small
          class="mx-1 d-flex-inline white--text"
          color="primary"
          v-for="(category, index) in news.category"
          :key="index"
          >{{ category }}
        </v-chip>
      </v-col>
    </v-row>
    <v-card-text
      class="text--primary text-left"
    >
      <p>{{ news.content.slice(0, 50) + "..." }}</p>
    </v-card-text>
    <!-- <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        small
        color="cyan"
      >
        Add
      </v-btn>
    </v-card-actions> -->
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

<style></style>
