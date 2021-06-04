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
        <img class="carousel-img" src="@/assets/Speaker1.jpeg" />
      </slide>
      <slide
        data-index="1"
        data-name="MySlideName"
      
        :centerMode="true"
      >
        <img class="carousel-img" src="@/assets/Speaker2.jpeg" />
      </slide>
      <slide
        data-index="2"
        data-name="MySlideName"
      
        :centerMode="true"
      >
        <img class="carousel-img" src="@/assets/Speakeer3.jpeg" />
      </slide>
     
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: "Keynote_Spaeakers",
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
