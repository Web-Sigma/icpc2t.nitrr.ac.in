<template>
  <div class="col-xl-8 col-md-12">
    <!-- Post -->
    <div class="row mt-2 mb-5 pb-3 mx-2">
      <!-- Card -->
      <div class="card card-body mb-5">
        <h2 class="font-weight-bold mt-3">
          <strong>Speakers</strong>
        </h2>
        <hr class="red title-hr" />
        <div class="row">
          <div class="col-xl-6 col-md-12">
            <div class="card card-body mb-5">
              <img
                src="@/assets/speaker2.jpeg"
                style="width: 100%; height: 270px"
                alt="speaker"
              />
              <br />
              <b>Dr. Jih-Sheng (Jason) Lai</b> <br />
              IEEE Fellow <br />
              James S. Tucker Professor <br />
              Director of Future Energy Electronics Center (FEEC) <br />
              Virginia Tech, Blacksburg, VA <br />
            </div>
          </div>
          <div class="col-xl-6 col-md-12">
            <div class="card card-body mb-5">
              <img
                src="@/assets/speaker1.jpeg"
                style="width: 100%; height: 270px"
                alt="speaker"
              />
              <br />
              <b>Dr. Akshay Kumar Rathore</b> <br />
              IEEE Fellow <br />
              Associate Professor <br />
              Electrical and Computer Engineering <br />
              Concordia University, Montreal, Quebec, Canada <br />
            </div>
          </div>
          <div class="col-xl-6 col-md-12">
            <div class="card card-body mb-5">
              <img
                src="@/assets/speaker3.jpg"
                style="width: 100%; height: 270px"
                alt="speaker"
              />
              <br />
              <b> Prof. Sule Yildirim Yayilgan</b> <br />
              Department of Information Security and Communication Technology
              <br />
              Faculty of Information Technology and Electrical Engineering
              <br />
              Ametyst-bygget, Gjøvik<br />
            </div>
          </div>
        </div>
        <!-- <p class="article">Will be Updated Soon.</p> -->
        <!-- <carousel id="primary"
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
     
    </carousel> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Keynote_Spaeakers",
  components: {},
};
</script>

<style scoped>
.carousel-img {
  height: 800px;
  width: 100%;
}
</style>
