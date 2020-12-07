import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/DashboardView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/articles/:article_id?',
    name: 'Articles',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArticlesView.vue'),
  },
  {
    path: '/articles-search/:article_id?',
    name: 'Article Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArticleSearchView.vue'),
  },
  {
    path: '/topics',
    name: 'Topic Detection',
    component: () => import(/* webpackChunkName: "about" */ '../views/TopicDetectionView.vue'),
  },
  {
    path: '*',
    redirect: '/articles',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
