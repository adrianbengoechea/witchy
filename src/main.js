import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    pleaseAlert() {
      window.alert('Alive!');
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


