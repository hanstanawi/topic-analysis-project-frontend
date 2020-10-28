<template>
  <div>
    <v-card
      max-width="550px"
      height="100%"
      flat
      outlined
      class="mx-auto"
    >
      <!-- TOOLBAR -->
      <v-toolbar color="light-blue darken-2" dark>
        <v-toolbar-title>Most Searched Keywords</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <!-- ITEMS -->
      <v-card-text>
        <v-list two-line>
          <template v-for="(keyword, index) in keywordList">
            <v-list-item
              :key="keyword.id"
            >
              <template>
                <v-list-item-content>
                  <v-row
                    justify="space-betweeen"
                    no-gutters
                  >
                    <v-col cols="10">
                      <v-list-item-title
                        v-text="`${index + 1}. ${keyword.keyword}`"
                        class="text-left title font-weight-bold"
                      />
                      <v-list-item-subtitle
                        class="text--primary text-left ml-5 mt-3"
                        v-text="`${keyword.articles.content.slice(0, 30)}...`"
                      />
                    </v-col>
                    <v-col cols="2">
                      <v-list-item-subtitle
                        class="text--primary text-right font-weight-bold"
                      >
                        <span class="title">{{ keyword.frequency }} </span>
                        <span class="subtitle">times</span>
                      </v-list-item-subtitle>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </template>
            </v-list-item>
            <v-divider
              v-if="index + 1 < keywordList.length"
              :key="index"
            />
          </template>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'HistoryList',
  props: {
    keywordList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
