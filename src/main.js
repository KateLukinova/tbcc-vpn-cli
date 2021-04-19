import Vue from 'vue'
import App from './App.vue'
import vSelect from 'vselect-component'
import VueRouter from 'vue-router'
import { i18n } from './plugins/i18n.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {store} from './store';
import '../src/assets/scss/main.scss'

Vue.use(VueRouter)
Vue.use(i18n)
Vue.use(store)
Vue.use(vSelect)
Vue.use(VueAxios, axios)

window.eventBus = new Vue();

/* exported MFooter */
const MFooter = Vue.component('MFooter', require('./components/MFooter.vue').default)
const MHeader = Vue.component('MHeader', require('./components/MHeader.vue').default)
const LangSelect = Vue.component('LangSelect', require('./components/LangSelect.vue').default)
const Home = Vue.component('Home', require('./components/Home.vue').default)


const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home }
]

Vue.config.productionTip = false

const router = new VueRouter
({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  i18n,
  router: router
}).$mount('#app')

export {MFooter, MHeader, LangSelect}

