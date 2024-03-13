import Vue from 'vue';
import Router from 'vue-router';
import DataComponent from './components/DataComponent.vue';
import Dashboard from './components/Dashboard.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/data',
      name: 'Data-',
      component: DataComponent,
    },
  ],
});
