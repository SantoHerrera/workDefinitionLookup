//import Vue from 'vue'
import App from './App.vue'

import Vue from 'vue/dist/vue.js'

//module.exports = { runtimeCompiler: true, }

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
