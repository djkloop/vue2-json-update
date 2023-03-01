import Vue from 'vue'
import App from './App.vue'

// test register
import A from "./components/A.vue"
import AChild from "./components/AChild.vue"
import B from "./components/B.vue"
import BChild from "./components/BChild.vue"

import './assets/main.css'

Vue.component('A', A)
Vue.component('AChild', AChild)
Vue.component('B', B)
Vue.component('BChild', BChild)

new Vue({
  render: (h) => h(App)
}).$mount('#app')



