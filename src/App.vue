<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <Navbar />
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
import Navbar from "./components/Navbar.vue";
import Side from "./components/Side.vue";
import Carousel from "./components/Carousel.vue";

import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Side,Carousel,Footer
  },
};
</script>

