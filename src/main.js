import { createApp } from 'vue'
import App from './App.vue'
// import Vue from 'vue'
import router from './router'
import store from './store'
// import {FontAwesome} from '../node_modules/font-awesome'
// // import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// // library.add(faUserSecret)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.config.productionTip = false


createApp(App).use(store).use(router).mount('#app')
