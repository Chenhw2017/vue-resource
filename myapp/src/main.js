import Vue from '../node_modules/vue/dist/vue'
import App from './App.vue'
import VueRouter from '../node_modules/vue-router/dist/vue-router';
import HelloWorld from './components/HelloWorld.vue'
import User from './components/User'

const router = new VueRouter({
  mode:'history',
  routes:[
    {
      path: '/',
      name:'home',
      component: HelloWorld
    },
    {
      path: '/user',
      name:'user',
      component: User
    }
  ]
})

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
