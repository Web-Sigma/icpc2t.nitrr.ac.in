<template>
  <div>
    <carousel id="primary"
      :per-page="1"
      :mouse-drag="false"
      :autoplay=true
      :speed=2000
      :loop=true
      :autoplayHoverPause=true
    >
      <slide
        data-index="0"
        data-name="MySlideName"
      
        :centerMode="true"
      >
        <img class="carousel-img" src="@/assets/Workshop1.jpg" />
      </slide>
      <slide
        data-index="1"
        data-name="MySlideName"
      
        :centerMode="true"
      >
        <img class="carousel-img" src="@/assets/workshop3.jpeg" />
      </slide>
      <slide
        data-index="2"
        data-name="MySlideName"
      
        :centerMode="true"
      >
        <img class="carousel-img" src="@/assets/Workshop2.jpeg" />
      </slide>
      
    </carousel>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: "Workshops",
  components:{
    Carousel, 
    Slide
  }
};
</script>

<style scoped>
.carousel-img {
  height: 800px;
  width: 100%;
}
</style>
