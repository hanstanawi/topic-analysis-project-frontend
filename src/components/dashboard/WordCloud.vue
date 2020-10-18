<template>
  <vue-word-cloud
    style="
      height: 300px;
      width: 640px;
    "
    :words="[['肺炎', 10], ['蔡英文', 3], ['美食', 7], ['台灣', 3]]"
    :color="([, weight]) => weight > 10 ? 'RoyalBlue' : weight > 5 ? 'Red' : 'Black'"
    font-family="Roboto"
  />
</template>

<script>
import VueWordCloud from 'vuewordcloud';

export default {
  name: 'WordCloud',
  components: {
    [VueWordCloud.name]: VueWordCloud,
  },
};
</script>

<style>

</style>
