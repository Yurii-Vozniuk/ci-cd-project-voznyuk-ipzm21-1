import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import router from './router';
import 'material-design-icons-iconfont';
import './assets/styles/styles.scss';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');
