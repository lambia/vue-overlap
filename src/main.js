import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Globals from "./config/globals";
import Core from "./plugins/core";
Vue.use(Core, Globals);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
