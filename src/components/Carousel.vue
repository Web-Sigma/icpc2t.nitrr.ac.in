<template>
<div id="carousel-main-div-for-spacing">
  <!-- Carousel Wrapper -->
  <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">

 <carousel 
            :per-page="1"
            :mouse-drag="true"
            :loop="true"
            :autoplay="true"
           
          >
            <slide>
             
        <!--First slide-->
        <div class="carousel-item active">

          <div class="row">
            <div class="col-md-4">
              <div class="card mb-2">
                <img class="card-img-top" src="@/assets/GateNIT.jpg"
                  alt="Card image cap">
                
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <img class="card-img-top" src="@/assets/NIT.jpg"
                  alt="Card image cap">
              
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <img class="card-img-top" src="@/assets/nit-entrance.jpg"
                  alt="Card image cap">
                
              </div>
            </div>
          </div>

        </div>
        <!--/.First slide-->

            </slide>
            <slide>
              
        <!--Second slide-->
        <div class="carousel-item active">

          <div class="row">
            <div class="col-md-4">
              <div class="card mb-2">
                <img class="card-img-top" src="@/assets/nit-entrance.jpg"
                  alt="Card image cap">
                
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <img class="card-img-top" src="@/assets/nitfront.jpg"
                  alt="Card image cap">
               
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <img class="card-img-top" src="@/assets/NIT.jpg"
                  alt="Card image cap">
               
              </div>
            </div>
          </div>

        </div>
        <!--/.Second slide-->
 </slide
            ><slide>
             
        <!--Third slide-->
        <div class="carousel-item active">

          <div class="row">
            <div class="col-md-4">
              <div class="card mb-2">
                <img class="card-img-top" src="@/assets/nitnight.jpg"
                  alt="Card image cap">
                
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <img class="card-img-top" src="@/assets/NIT.jpg"
                  alt="Card image cap">
                
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <img class="card-img-top" src="@/assets/nitnight gate.jpg"
                  alt="Card image cap">
                
              </div>
            </div>
          </div>

        </div>
        <!--/.Third slide-->

            </slide>
          </carousel>
          
  </div>
  <!-- Carousel Wrapper -->

  

</div>
  
</template>

<script>
export default {
  name: "ABCD",
};
</script>

<style scoped>
#carousel-main-div-for-spacing{
  margin-right: 50px;
  margin-left: 50px;
}
.col-md-4{
padding-top: 0;
padding-right: 5px;
padding-bottom: 0;
padding-left: 5px;
}
img {
  max-height:220px;
  height: 100%;
  width:100%;
 
}


</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->

