import Vue from 'vue'
import App from './App.vue'
import router from './router'
import DynamicMarquee from 'vue-dynamic-marquee';
Vue.component('dynamic-marquee', DynamicMarquee);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
