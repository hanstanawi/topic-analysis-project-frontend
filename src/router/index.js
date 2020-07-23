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
    path: '/articles/:id?',
    name: 'Articles',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArticlesView.vue'),
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
