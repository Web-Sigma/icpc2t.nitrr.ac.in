<template>
  <div id="app">
    <!-- Navigation -->
    <div v-cloak>
      <header class="">
        <div class="banner">
          <img src="../assets/header.svg" alt="" />
        </div>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-dark unique-color ">
          <!-- Navbar brand -->
          <router-link class="navbar-brand" to="/"
            >ICPC<sup>2</sup>T</router-link
          >

          <!-- Collapse button -->
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Collapsible content -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent" :key="$route.path" >
            <!-- Links -->
            <ul class="navbar-nav mr-auto">
              <!-- Dropdown -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                  >Committees</a
                >

                <div
                  class="dropdown-menu dropdown-primary"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <router-link class="dropdown-item" to="/advisory"
                    >Advisory Committee</router-link
                  >

                  <router-link class="dropdown-item" to="/organising"
                    >Organizing Committee</router-link
                  >

                  <router-link class="dropdown-item" to="/technical"
                    >Technical Program Committee</router-link
                  >
                </div>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                  >Call for Papers</a
                >

                <div
                  class="dropdown-menu dropdown-primary"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <router-link class="dropdown-item" to="/call-for-papers"
                    >Call for Papers</router-link
                  >

                  <router-link class="dropdown-item" to="/tracks"
                    >Tracks / Topics</router-link
                  >
                  <router-link class="dropdown-item" to="/camerareadysubmission"
                    >Camera Ready Submission Instructions</router-link
                  >

      
                </div>
              </li>

              <router-link class="nav-link" to="/speakers"
                >Keynote Speakers</router-link
              >

              <router-link class="nav-link" to="/schedule"
                >Program Schedule</router-link
              >

              <router-link class="nav-link" to="/workshops"
                >Workshops</router-link
              >

              <router-link class="nav-link" to="/registration"
                >Registration</router-link
              >

              <router-link class="nav-link" to="/downloads"
                >Downloads</router-link
              >

              <router-link class="nav-link" to="/partners"
                >Partners</router-link
              >

              <router-link class="nav-link" to="/contact"
                >Contact Us</router-link
              >
            </ul>
            <!-- Links -->
          </div>
          <!-- Collapsible content -->
        </nav>
        <!-- Navbar -->
      </header>
      <!-- Navigation -->
      <Carousel />
      <!-- Main layout -->
      <main>
        <div class="container-fluid">
          <!-- Magazine -->
          <div class="row mt-2">
            <slot />
            <Side />
          </div>
          <!-- Magazine -->
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>
<script>
import Side from "../components/Side.vue";
import Carousel from "../components/Carousel.vue";

import Footer from "../components/Footer.vue";
export default {
  name: "App",
  components: {
    Side,
    Carousel,
    Footer,
  },
  data() {
    return {};
  },
  watch: {
    '$route' () {
      this.$root.$emit('button::toggle::collapse', 'navbar-toggler')
    }
  }
};
</script>
<style scoped>
a.router-link-exact-active {
  border-bottom: 3px solid;
  text-decoration-color: 5px solid rgb(255, 255, 255);
}
.sampleContent {
  padding: 4em 0 4em 0;
}

.banner {
  background: rgba(255, 255, 255, 0.8);
  margin: 0;
  padding: 1em;
}
.banner img{
  width:100%;

  }
[v-cloak] {
  display: none;
}
@media (max-width: 1600px) {
  main {
    padding-top: 0px;
  }
}
</style>
