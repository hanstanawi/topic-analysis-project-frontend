<template>
<div>
  <v-card
    max-width="550px"
    height="100%"
    class="mx-auto"
  >
    <!-- TOOLBAR -->
    <v-toolbar
      color="primary"
      dark
    >
      <v-toolbar-title>Latest Articles</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <!-- ITEMS -->
    <v-card-text>
      <v-list two-line>
      <template v-for="(article, index) in articlesList">
        <v-list-item
          :key="article.id"
          @click="$emit('openArticleModal', article)"
        >
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
</div>

</template>

<script>
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
};
</script>

<style></style>
