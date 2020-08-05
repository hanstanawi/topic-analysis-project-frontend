<template>
<div>
  <v-card
    max-width="550px"
    height="100%"
    flat
    class="mx-auto"
  >
    <v-card-title>
      <div>Top 5 Topics</div>
    </v-card-title>
    <!-- ITEMS -->
    <v-card-text>
      <v-list two-line>
      <template v-for="(topic, index) in topicsList">
        <v-list-item
          :key="topic.id"
          @click="$emit('selected-topic', topic)"
        >
          <template>
            <v-list-item-content>
              <v-list-item-title
                v-text="topic.title"
                class="text-left title"
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
