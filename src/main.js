import Vue from 'vue'
import App from './App.vue'
import Routes from './routes'
import { auth } from './firebase'
import store from './store'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});


auth.onAuthStateChanged(user =>  {
  if (user) {
    store.commit("setUser", user)
  }
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
