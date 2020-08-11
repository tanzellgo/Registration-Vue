import Vue from "vue"
import Vuex from "vuex"
import {auth} from './firebase'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    user(state){
      return state.user
    }
  },
  mutations: {
    setUser(state, user){
      state.user = user
    }
  },
  actions: {
    checkState() {
      return new Promise((resolve, reject) => {
        auth.onAuthStateChanged((user) => {
          if (user) {
            this.commit('setUser', user);
            resolve(user.uid);
          } else {
            reject('User is not logged in.');
          }
        });
      });
    }  
  }
});
