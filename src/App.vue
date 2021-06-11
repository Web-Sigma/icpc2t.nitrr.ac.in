<template>
  <div id="app" >
    <!-- Navigation -->
    <header class="">
      <div class="banner">
        <img src="./assets/header.svg" alt="">
      </div>
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-dark unique-color py-4">
        <!-- Navbar brand -->
        <router-link class="navbar-brand" to="/">ICPC2T</router-link>

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
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
                <router-link class="dropdown-item" to="#"
                  >Advisory Committee</router-link
                >

                <router-link class="dropdown-item" to="#"
                  >Organising Committee</router-link
                >

                <router-link class="dropdown-item" to="#"
                  >Technical Committee</router-link
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
                <router-link class="dropdown-item" to="#"
                  >Call for Papers</router-link
                >

                <router-link class="dropdown-item" to="#"
                  >Tracks / Topics</router-link
                >
              </div>
            </li>

            <router-link class="nav-link" to="#">Keynote Speakers</router-link>

            <router-link class="nav-link" to="#">Program Schedule</router-link>

            <router-link class="nav-link" to="#">Workshops</router-link>

            <router-link class="nav-link" to="#">Registration</router-link>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                >Plan Travel</a
              >

              <div
                class="dropdown-menu dropdown-primary"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <router-link class="dropdown-item" to="#"
                  >About India</router-link
                >

                <router-link class="dropdown-item" to="#"
                  >About Raipur</router-link
                >

                <router-link class="dropdown-item" to="#"
                  >Travelling to Raipur</router-link
                >
                <router-link class="dropdown-item" to="#"
                  >Conference Venue</router-link
                >

                <router-link class="dropdown-item" to="#"
                  >Accomodation</router-link
                >

                <router-link class="dropdown-item" to="#"
                  >Tourists Attraction</router-link
                >
              </div>
            </li>
            <router-link class="nav-link" to="#">Downloads</router-link>

            <router-link class="nav-link" to="#">Partners</router-link>

            <router-link class="nav-link" to="#">Contact Us</router-link>
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
          <router-view />
          <Side />
        </div>
        <!-- Magazine -->
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import Side from "./components/Side.vue";
import Carousel from "./components/Carousel.vue";

import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Side,
    Carousel,
    Footer,
  },
  data() {
    return {
      
    };
  },
 
};
</script>
<style scoped>
a.router-link-exact-active {
  color: #fff;
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
</style>
