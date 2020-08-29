<template>
  <v-container
    fluid
    class="pa-5"
  >
    <div>
      <v-btn
        @click="closeDetails"
        text
        small
      >
        Back to Articles
      </v-btn>
    </div>
    <v-card
      flat
      class="py-5 px-15"
    >
      <v-row justify="center">
        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <div class="text-left ml-4 text-h4 font-weight-medium">
                {{ article.title }}
              </div>
              <div class="text-left ml-4 content font-weight-medium">
                {{ formatDate(article.tp) }}
              </div>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col
              cols="12"
              align="center"
              class="pb-0"
            >
              <v-img
                max-height="400"
                :src="article.image"
              />
            </v-col>
          </v-row>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <div class="text-left">
                  <span class="font-weight-bold body-1">Board:</span>
                  <span v-if="article.board">
                    <v-chip
                      class="mx-2 d-flex-inline white--text"
                      color="light-blue darken-2"
                    >
                      {{ article.board }}
                    </v-chip>
                  </span>
                  <span v-if="article.category2">
                    <v-chip class="ma-2 d-flex-inline" color="primary">
                      {{ article.category2 }}
                    </v-chip>
                  </span>
                  <span v-if="article.category3">
                    <v-chip class="ma-2 d-flex-inline" color="primary">
                      {{ article.category3 }}
                    </v-chip>
                  </span>
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
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import moment from 'moment-timezone';

export default {
  name: 'ArticlesDetails',
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
    closeDetails() {
      this.$emit('closeArticleDetails');
    },
  },
};
</script>

<style></style>
