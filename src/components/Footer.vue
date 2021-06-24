<template>
  <!-- Footer -->
  <footer class="page-footer unique-color mt-3">
    <!-- Footer Links -->
    <div class="container-fluid">
      <hr />

      <div class="row py-3 d-flex align-items-center">
        <!-- Grid column -->
        <div class="col-md-7 col-lg-8">
          <!-- Copyright -->
          <p class="text-center text-md-left grey-text">
            © 2021 Copyright:
            <a href="http://nitrr.ac.in" target="_blank">
              National Intitute of Technology Raipur
            </a>
          </p>
           
          <!-- Copyright -->
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-5 col-lg-4 ml-lg-0">
      <div class=" text-center mr-auto text-md-left">
            <div class="dropup">
              <button class="dropbtn text-center ">Developers: Jay Prakash & Anmol Agrawal </button>
              
            </div>
          </div> 
        </div>
        <!-- Grid column -->
      </div>
    </div>
  </footer>
  <!-- Footer -->
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
      contributor:[]
    };
  },
  // created(){
  //   fetch("https://api.github.com/repos/Web-Sigma/icpc2t.nitrr.ac.in/contributors")
  //   .then(response => {
  //     this.contributor=response.json;
  //     console.log(this.contributor)
  //   })
  // }
};
</script>
<style scoped>
.dropbtn {
  background-color:transparent;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropup content */
.dropup {
  position: relative;
  display: inline-block;
}

/* Dropup content (Hidden by Default) */
.dropup-content {
  display: none;
  position: absolute;
  bottom: 50px;
  background-color: #ffffff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropup */
.dropup-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropup links on hover */
.dropup-content a:hover {
  background-color: #ddd;
}

/* Show the dropup menu on hover */
.dropup:hover .dropup-content {
  display: block;
}

/* Change the background color of the dropup button when the dropup content is shown */
.dropup:hover .dropbtn {
  background-color: #2980b9;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
