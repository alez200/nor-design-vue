import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

import HomePage from './Pages/HomePage';
import Collection from './Pages/Collection';
import Line from './Pages/Line';


export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/collezione',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/linea',
      name: 'Line',
      component: Line
    }
  ]
})


Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  VueRouter,
}).$mount('#app');
