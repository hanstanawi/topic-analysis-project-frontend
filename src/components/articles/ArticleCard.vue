<template>
  <v-card
    class="text-center ma-1 my-3 mx-auto card-style"
    width="1000px"
    height="92%"
  >
    <v-responsive>
      <v-img
        :src="article.image"
        contain
      />
    </v-responsive>
    <router-link
      tag="p"
      :to="{ name: 'ArticleDetails', params: { id: article.url }}"
    >
      <v-card-title
      class="article-title pb-0"
    >
      {{ article.title }}
    </v-card-title>
    </router-link>
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
          >{{ article.board }}
        </v-chip>
        <!-- <v-chip
          small
          class="mx-1 d-flex-inline white--text"
          color="primary"
          >{{ article.category2 }}
        </v-chip>
        <v-chip
          small
          class="mx-1 d-flex-inline white--text"
          color="primary"
          >{{ article.category3 }}
        </v-chip> -->
      </v-col>
    </v-row>
    <v-card-text
      class="text--primary text-left"
    >
      <p>{{ article.content.slice(0, 50) + "..." }}</p>
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
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
p .article-title {
cursor: pointer;
}
p .article-title:hover {
  text-decoration: underline;
}
</style>
