import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../app.scss'

import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import Grafitti from "./components/pages/Grafitti"

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  {path:"/",component:Home},
  {path:"/grafitti",component:Grafitti},
  {path:"/contact",component:Contact}
]
const router = new VueRouter({
  mode:"history",
  routes
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
