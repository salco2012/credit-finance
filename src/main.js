import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import 'vuetify/dist/vuetify.min.css';
import vuetify from './plugins/vuetify';

Vue.use(Vuetify);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
