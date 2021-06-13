<template>
  <!-- Carousel Wrapper -->
  <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">

 <carousel 
            :per-page="1"
            :mouse-drag="true"
            :loop="true"
            :autoplay="true"
           
          >
            <slide>
              <img src="@/assets/nit-entrance.jpg" alt="" />
            </slide>
            <slide>
              <img src="@/assets/banner.jpeg" alt="" /> </slide
            ><slide>
              <img src="@/assets/gadi-chowk.jpg" alt="" />
            </slide>
          </carousel>
          
  </div>
  <!-- Carousel Wrapper -->

  
</template>

<script>
export default {
  name: "ABCD",
};
</script>

<style scoped>
img {
  max-height:220px;
  height: 100%;
  width:100%;
 
}


</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->

