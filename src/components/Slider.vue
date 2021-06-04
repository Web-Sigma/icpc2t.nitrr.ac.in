<template>
  <div>
    <carousel
      :per-page="1"
      
      :mouse-drag="false"
      :autoplay=true
      :speed=1500
      :loop=true
    >
      <slide
        data-index="0"
        data-name="MySlideName"
      
        :centerMode="true"
      >
        <img class="carousel-img" src="@/assets/banner.jpeg" />
      </slide>
      <slide
        data-index="1"
        data-name="MySlideName"
      
        :centerMode="true"
      >
        <img class="carousel-img" src="@/assets/banner.jpeg" />
      </slide>
      <slide
        data-index="2"
        data-name="MySlideName"
      
        :centerMode="true"
      >
        <img class="carousel-img" src="@/assets/banner.jpeg" />
      </slide>
      <slide
        data-index="3"
        data-name="MySlideName"
      
        :centerMode="true"
      >
        <img class="carousel-img" src="@/assets/banner.jpeg" />
      </slide>
      <slide
        data-index="4"
        data-name="MySlideName"
      
        :centerMode="true"
      >
        <img class="carousel-img" src="@/assets/banner.jpeg" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name:"Slider",
  components:{
    Carousel, 
    Slide
  }
}
</script>

<style scoped>
.carousel-img {
  width: 100%;
}
</style>