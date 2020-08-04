<template>
  <v-dialog
    v-model="showArticleDetails"
    max-width="450px"
  >
    <v-card>
      <v-card-title>
        {{ article.title }}
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ArticleDetailsModal',
  props: {
    article: {
      type: Object,
      required: true,
    },
    showArticleDetails: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<style>

</style>
