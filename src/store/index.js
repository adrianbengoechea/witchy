import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    authUser(state) {
      return (state.user != null && Object.keys(state.user).length != 0) ? true : false;
    }
  }
});
