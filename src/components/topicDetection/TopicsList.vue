<template>
<div>
  <v-card
    flat
    height="300px"
    class="mx-auto"
  >
    <v-card-title class="py-0">
      <div class="ml-3">Top 5 Topics</div>
    </v-card-title>
    <!-- ITEMS -->
    <v-card-text>
      <v-list>
      <template v-for="(topic, index) in topicsList">
        <v-list-item
          :key="topic.id"
          @click="$emit('selected-topic', topic)"
        >
          <template>
            <v-list-item-content>
              <v-list-item-title
                v-text="topic.title"
                class="text-left text-h6"
              >
              </v-list-item-title>
              <v-list-item-subtitle
                class="text--primary"
                v-text="topic.content"
              >
              </v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-divider
          v-if="index + 1 < topicsList.length"
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
  name: 'TopicsList',
  props: {
    topicsList: {
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
