<template>
  <div>
    <header id="masthead" class="site-header slide-in-top" role="banner">
      <router-link to="/"
        ><img
          src="./assets/temp.svg"
          class="header-image"
          width="2403"
          height="615"
          alt=""
        />
      </router-link>
      <br />
      <div class="top-header">
        <div class="container clearfix"></div>
      </div>
      <div class="topnav clearfix" id="myTopnav">
        <router-link to="/" class="active">Home</router-link>
        <div class="dropdown">
          <button class="dropbtn">
            Committees
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <router-link to="/advisory">Advisory Committee</router-link>
            <router-link to="/organising">Organising Committee</router-link>
            <router-link to="/technical">Technical Committee</router-link>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Call for papers
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <router-link to="/call-for-papers">Call for Papers</router-link>
            <router-link to="/tracks">Tracks / Topics</router-link>
          </div>
        </div>
        <router-link to="/speakers">Keynote Speakers</router-link>
        <router-link to="/schedule">Program Schedule</router-link>
        <router-link to="/workshops">Workshops</router-link>
        <router-link to="/registration">Registration</router-link>
        <div class="dropdown">
          <button class="dropbtn">
            Plan Travel
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <router-link to="/india">About India</router-link>
            <router-link to="/raipur">About Raipur</router-link>
            <router-link to="/venue">Conference Venue</router-link>
            <router-link to="/accomodation">Accomodation</router-link>
            <router-link to="/tourist">Tourists Attraction</router-link>
          </div>
        </div>
        <router-link to="/downloads">Downloads</router-link>
        <router-link to="/partners">Partners</router-link>
        <router-link to="/contact">Contact Us</router-link>
        <a to="javascript:void(0);" class="icon" onclick="myFunction()"
          >&#9776;</a
        >
      </div>
    </header>
    <div id="content">
      <div class="container clearfix">
        <router-view class="slide-in-left" />
        <Side class="slide-in-right"/>
      </div>
    </div>
    <Footer class="slide-in-bottom"/>
  </div>
</template>
<script>
import Side from "./components/Side.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Side,
    Footer,
  },
};
</script>

<style>
.slide-in-left{-webkit-animation:slide-in-left .5s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-left .5s cubic-bezier(.25,.46,.45,.94) both}
.slide-in-right{-webkit-animation:slide-in-right .5s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-right .5s cubic-bezier(.25,.46,.45,.94) both}
.slide-in-top{-webkit-animation:slide-in-top .5s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-top .5s cubic-bezier(.25,.46,.45,.94) both}
.slide-in-bottom{-webkit-animation:slide-in-bottom .5s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-bottom .5s cubic-bezier(.25,.46,.45,.94) both}
@-webkit-keyframes slide-in-right{0%{-webkit-transform:translateX(1000px);transform:translateX(1000px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes slide-in-right{0%{-webkit-transform:translateX(1000px);transform:translateX(1000px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}
@-webkit-keyframes slide-in-left{0%{-webkit-transform:translateX(-1000px);transform:translateX(-1000px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes slide-in-left{0%{-webkit-transform:translateX(-1000px);transform:translateX(-1000px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}
@-webkit-keyframes slide-in-top{0%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slide-in-top{0%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}
@-webkit-keyframes slide-in-bottom{0%{-webkit-transform:translateY(1000px);transform:translateY(1000px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slide-in-bottom{0%{-webkit-transform:translateY(1000px);transform:translateY(1000px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}
.site {
  padding-top: 15px;

  padding-right: 15px;

  padding-bottom: 15px;

  padding-left: 15px;

  box-shadow: #c7c7c7 1px 1px 8px;
}
</style>
<style >
/* Add a black background color to the top navigation */
.topnav {
  background-color: #006699;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Add an active class to highlight the current page */
.active {
  text-decoration: underline;
  color: white;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}

/* Dropdown container - needed to position the dropdown content */
.dropdown {
  float: left;
  overflow: hidden;
}

/* Style the dropdown button to fit inside the topnav */
.dropdown .dropbtn {
  font-size: 17px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

/* Style the dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color:  #006699;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Style the links inside the dropdown */
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Add a dark background on topnav links and the dropdown button on hover */
.topnav a:hover,
.dropdown:hover .dropbtn {
  background-color: #006699;
  color: white;
}

/* Add a grey background to dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

/* Show the dropdown menu when the user moves the mouse over the dropdown button */
.dropdown:hover .dropdown-content {
  display: block;
}

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {
  .topnav a:not(:first-child),
  .dropdown .dropbtn {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .topnav.responsive .dropdown {
    float: none;
  }
  .topnav.responsive .dropdown-content {
    position: relative;
  }
  .topnav.responsive .dropdown .dropbtn {
    display: block;
    width: 100%;
    text-align: left;
  }
}
</style>
