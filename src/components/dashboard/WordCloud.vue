<template>
  <vue-word-cloud
    style="
      height: 200px;
      width: 800px;
    "
    :words="words"
    :color="([, weight]) => weight > 10 ? 'Red' : weight > 5 ? 'RoyalBlue' : 'Black'"
    font-family="Roboto"
  />
</template>

<script>
import VueWordCloud from 'vuewordcloud';

export default {
  name: 'WordCloud',
  props: {
    words: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    [VueWordCloud.name]: VueWordCloud,
  },
};
</script>

<style>

</style>
