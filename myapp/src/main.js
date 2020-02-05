import Vue from '../node_modules/vue/dist/vue'
import App from './App.vue'
import VueRouter from '../node_modules/vue-router/dist/vue-router';
import HelloWorld from './components/HelloWorld.vue'
import User from './components/User'
// import Vuex from '../node_modules/vuex/dist/vuex'

Vue.use(VueRouter)
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

router.beforeEach((to, from, next) => {
  // ...
  // eslint-disable-next-line
  console.log(to, from,next)
  next();
})

// router.afterEach((to, from) => {
//   // to and from are both route objects.
//   // eslint-disable-next-line
//   console.log(to, from)
// })


//  vuex




// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
//   router
// }).$mount('#app')

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
