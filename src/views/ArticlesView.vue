<template>
  <v-container
    class="my-5 px-10"
    fluid>
    <articles-toolbar
      @updateSearchValue="searchValue = $event"
    />
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
        v-for="news in filteredList"
        :key="news.id">
       <article-card :news="news"/>
     </v-col>
   </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ArticleCard from '../components/articles/ArticleCard.vue';
import ArticlesToolbar from '../components/articles/ArticlesToolbar.vue';

export default {
  name: 'ArticlesView',
  data() {
    return {
      searchValue: '',
    };
  },
  components: {
    ArticlesToolbar,
    ArticleCard,
  },
  computed: {
    ...mapGetters({
      articlesList: 'getArticlesList',
    }),
    filteredList() {
      const searchValue = this.searchValue.toLowerCase();
      if (this.searchValue === '' || !this.searchValue) {
        return this.articlesList;
      }
      // eslint-disable-next-line max-len
      const searchValueFilter = this.articlesList.filter((news) => news.title.toLowerCase().match(searchValue) || news.content.toLowerCase().match(searchValue));
      return searchValueFilter;
    },
  },
  async created() {
    await this.fetchArticles();
  },
  methods: {
    ...mapActions({
      fetchArticles: 'getAllArticles',
    }),
  },
};
</script>
