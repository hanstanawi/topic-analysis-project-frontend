import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/DashboardView.vue';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArticlesView.vue'),
  },
  {
    path: '/movie/:id',
    name: 'ArticleDetails',
    component: () => import(/* webpackChunkName: "movie-details" */'../components/articles/ArticlesDetails.vue'),
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      // Passing params as props using Route Guards
      store.dispatch('getSingleArticle', routeTo.params.id, true)
        .then((article) => {
          // eslint-disable-next-line no-param-reassign
          routeTo.params.article = article;
          next();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
