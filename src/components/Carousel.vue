<template>
  <!-- Carousel Wrapper -->
  <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">

    <!-- Indicators -->
    <ol class="carousel-indicators">

      <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>

      <li data-target="#carousel-example-1z" data-slide-to="1"></li>

      <li data-target="#carousel-example-1z" data-slide-to="2"></li>

    </ol>
    <!-- Indicators -->

    <!-- Slides -->
    <div class="carousel-inner" role="listbox">

      <!-- First slide -->
    
      <div class="carousel-item active">

        <div class="view h-100">

          <img class="d-block h-100 w-lg-100" src="@/assets/nit-entrance.jpg"
            alt="First slide">

          

        </div>

      </div>
      
      <!-- First slide -->

      <!-- Second slide -->

      <div class="carousel-item h-100">

        <div class="view h-100">

          <img class="d-block h-100 w-lg-100" src="@/assets/banner.jpeg"
            alt="Second slide">


        </div>

      </div>
       
      <!-- Second slide -->

      <!-- Third slide -->

      <div class="carousel-item">

        <div class="view h-100">

          <img class="d-block h-100 w-lg-100" src="@/assets/gadi-chowk.jpg"
            alt="Third slide">


        </div>

      </div>
 
      <!-- Third s -->

    </div> 
    <!-- Slides -->

    <!-- Controls -->
    <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">

      <span class="carousel-control-prev-icon" aria-hidden="true"></span>

      <span class="sr-only">Previous</span>

    </a>

    <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">

      <span class="carousel-control-next-icon" aria-hidden="true"></span>

      <span class="sr-only">Next</span>

    </a>
    <!-- Controls -->

  </div>
  <!-- Carousel Wrapper -->
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style scoped>
img {
  max-height: 250px;
  width:100%;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->

