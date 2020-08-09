<template>
  <v-card flat>
    <v-card-title>Keywords</v-card-title>
    <v-card-text>
      <v-list>
        <template v-for="(topic, index) in topic.keywords">
          <v-list-item :key="index">
            <template>
              <v-list-item-content>
                <v-list-item-title
                  v-text="topic.keyword"
                  class="text-left"
                />
              </v-list-item-content>
            </template>
          </v-list-item>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'KeywordList',
  props: {
    topic: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
</style>
