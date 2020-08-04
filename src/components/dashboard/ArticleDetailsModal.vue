<template>
  <v-dialog
    v-model="showArticleDetails"
    max-width="650px"
    persistent
  >
    <v-card>
      <v-card-title>
        {{ article.title }}
        <v-spacer />
        <v-btn
          text
          small
          icon
          color="black"
          @click.stop="$emit('close')"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text
        style="overflow-y: auto; height: 500px;"
      >
        <v-row>
          <v-col cols="12" align="center">
            <v-img
              max-width="500"
              :src="article.image"
              contain
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="text-left">
              <span class="font-weight-bold body-1">Categories:</span>
              <span v-if="article.category1">
                <v-chip
                  class="mx-2 d-flex-inline"
                  color="primary"
                >
                  {{ article.category1 }}
                </v-chip>
              </span>
              <span v-if="article.category2">
                <v-chip
                  class="ma-2 d-flex-inline"
                  color="primary"
                >
                  {{ article.category2 }}
                </v-chip>
              </span>
              <span v-if="article.category3">
                <v-chip
                  class="ma-2 d-flex-inline"
                  color="primary"
                >
                  {{ article.category3 }}
                </v-chip>
              </span>
            </div>
            <div class="text-left body-1">
              <span class="font-weight-bold">Author:</span>
              {{ article.author }}
            </div>
            <div class="text-justify mt-3">
              {{ article.content }}
            </div>
          </v-col>
        </v-row>
      </v-card-text>
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
      default: false,
    },
  },
};
</script>

<style>
</style>
