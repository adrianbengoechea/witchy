<template>
  <header>
    <nav class="navbar navbar-expand-md fixed-top" :id="(authUser) ? 'mainNavbarFixedAnimation': 'mainNavbar'">
      <div class="container-fluid flex-column justify-content-center">
        <router-link to="/" class="navbar-brand">Witchy</router-link>
        <router-link to="/" class="navbar-brand-alt">Witchy</router-link>
        <div class="collapse navbar-collapse" id="navbar">
          <template v-if="authUser">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 pt-0">
              <li class="nav-item">
                <router-link to="/" class="text-success">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="text-success">About</router-link>
              </li>
            </ul>
          </template>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
// import Velocity from "velocity-animate";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      animation: {
        button: false
      }
    };
  },
  mounted() {
    window.addEventListener("scroll", function() {
      const nav = document.querySelector("#mainNavbarFixedAnimation");
      if (nav) {
        return (window.scrollY > 0) ? nav.classList.add('fixed') : nav.classList.remove('fixed'); 
      }
    });
  },
  computed: {
    ...mapGetters(["authUser"])
  }
};
</script>

<style lang="scss">
#MyButton {
  height: 50px;
}
.navbar#mainNavbar,
.navbar#mainNavbarFixedAnimation {
  padding-bottom: 13px;
  background: #fff;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.05);
  .navbar-brand,
  .navbar-brand-alt {
    font-weight: 800;
    text-decoration: none;
    color: #5200cc;
    font-size: 40px;
    opacity: 0.9;
    transition: all 0.3s ease;
    &.hover {
      opacity: 1;
    }
  }
  .navbar-brand {
    transition-delay: 0.2s;
  }
  .navbar-brand-alt {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translate(-40px, -50%);
    opacity: 0;
    visibility: hidden;
  }

  #navbar {
    margin-top: 0;
    width: calc(100% - 300px);
    transition: margin 0.3s ease 0.2s;
    .navbar-nav {
      padding-top: 12px;
      .nav-item {
        margin-right: 15px;
        &:last-of-type {
          margin-right: 0;
        }
        a {
          text-decoration: none;
        }
      }
    }
  }

  &.fixed {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    .navbar-brand {
      transform: translateY(-30px);
      opacity: 0;
      visibility: hidden;
      transition-delay: 0s;
    }
    .navbar-brand-alt {
      transform: translate(0, -50%);
      opacity: 1;
      visibility: visible;
      transition-delay: 0.3s;
    }
    #navbar {
      margin-top: -50px;
      transition: all 0.3s ease;
    }
  }
}
</style>
