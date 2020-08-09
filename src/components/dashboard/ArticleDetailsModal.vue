<template>
  <v-dialog
    v-model="showArticleDetails"
    max-width="650px"
    persistent
  >
    <v-card>
      <v-card-title class="font-weight-bold">
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
        class="px-10"
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
              <span class="font-weight-bold body-1">Board:</span>
              <span v-if="article.board">
                {{ article.board }}
              </span>
            </div>
            <div class="text-left body-1">
              <span class="font-weight-bold">Date:</span>
              {{ formatDate(article.tp) }}
            </div>
            <div class="text-left body-1">
              <span class="font-weight-bold">Author:</span>
              {{ article.author }}
            </div>
            <div class="text-justify mt-3 body-1">
              {{ article.content }}
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import moment from 'moment-timezone';

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

<style>
</style>
