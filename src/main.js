import Vue from 'vue';
import App from './App.vue';
import 'intro.js/introjs.css';
import VueIntro from 'vue-introjs';
import router from './router.js';

Vue.use(VueIntro); 

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
