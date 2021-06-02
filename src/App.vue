<template>
  <div>
    <div id="wrapper" style="padding: 15px; width: 100%">
      <div id="page" class="site">
        <Navbar />
        <router-view />
        <Side />
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import Side from "./components/Side.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Side,
    Footer,
    Navbar,
  },
};
</script>

<style>
.site{
  padding-top: 15px;

padding-right: 15px;

padding-bottom: 15px;

padding-left: 15px;

box-shadow: #c7c7c7 1px 1px 8px;
}
</style>
