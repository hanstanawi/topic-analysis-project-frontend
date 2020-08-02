<template>
 <div>
   <h1>{{ article.title }}</h1>
   <p>{{ article.content }}</p>
 </div>
</template>

<script>
export default {
  name: 'ArticlesDetails',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>

</style>
