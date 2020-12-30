<template>
  <div id="app">
    <div class="wrapper">
      <Nav />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "./components/layout/Nav.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  components: {
    Nav, Footer
  }
};
</script>

<style lang="scss"> 

@import "./assets/scss/__global.scss";

</style>
