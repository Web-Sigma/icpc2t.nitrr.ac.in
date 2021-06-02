<template>
  <div>
    <header id="masthead" class="site-header" role="banner">
      <a href="index.html"
        ><img
          src="temp.png"
          class="header-image"
          width="2403"
          height="615"
          alt=""
        />
      </a>
      <div class="top-header">
        <div class="container clearfix"></div>
      </div>
      <div id="sticky-header" class="clearfix" style="padding-top: 15px">
        <div class="container clearfix kk" style="background-color: #069">
          <section class="navigation">
            <div class="nav-container">
              <!-- <div class="brand">
      <a href="#!">Logo</a>
    </div> -->
              <nav>
                <div class="nav-mobile">
                  <a id="nav-toggle" href="#!"><span></span></a>
                </div>
                <ul class="nav-list">
                  <li class="active">
                    <a href="/">Home</a>
                  </li>

                  <li>
                    <a >Committees</a>
                    <ul class="nav-dropdown">
                      <li
                        class="<?php if(page=='advisory_committee'){echo 'active';}?>"
                      >
                        <a href="advisory_committee.php">AdvisoryCommittee</a>
                      </li>

                      <li
                        class="<?php if(page=='organising_committee'){echo 'active';}?>"
                      >
                        <a href="organising_committee.php">
                          Organising Committee</a
                        >
                      </li>
                      <li
                        class="<?php if(page=='technical_committee'){echo 'active';}?>"
                      >
                        <a href="technical_committee.php">
                          Technical Committee</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Call for papers</a>
                    <ul class="nav-dropdown">
                      <li class="<?php if(page=='tracks'){echo 'active';}?>">
                        <a href="tracks.php"> Tracks / Topics</a>
                      </li>
                    </ul>
                  </li>
                  <li class="<?php if(page=='schedule'){echo 'active';}?>">
                    <a href="schedule.php"> Program Schedule</a>
                  </li>
                  <li class="<?php if(page=='workshops'){echo 'active';}?>">
                    <a href="workshops.php">Workshops</a>
                  </li>
                  <li class="<?php if(page=='register'){echo 'active';}?>">
                    <a href="register.php"> Registeration</a>
                  </li>
                  <li>
                    <a href="#!">Plan Travel</a>
                    <ul class="nav-dropdown">
                      <li
                        class="<?php if(page=='aboutindia'){echo 'active';}?>"
                      >
                        <a href="about_india.php">About India</a>
                      </li>
                      <li
                        class="<?php if(page=='aboutraipur'){echo 'active';}?>"
                      >
                        <a href="about_raipur.php">About Raipur</a>
                      </li>
                      <li
                        class="<?php if(page=='travelraipur'){echo 'active';}?>"
                      >
                        <a href="travel_raipur.php">Travelling to Raipur</a>
                      </li>
                      <li
                        class="<?php if(page=='conferencevenue'){echo 'active';}?>"
                      >
                        <a href="conference_venue.php"> Conference Venue</a>
                      </li>
                      <li
                        class="<?php if(page=='accomodation'){echo 'active';}?>"
                      >
                        <a href="accomodation.php"> Accomodation</a>
                      </li>
                      <li
                        class="<?php if(page=='touristattractions'){echo 'active';}?>"
                      >
                        <a href="tourist_attractions.php">
                          Tourists Attraction</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="<?php if(page=='downloads'){echo 'active';}?>">
                    <a href="downloads.php">Downloads</a>
                  </li>
                  <li class="<?php if(page=='partners'){echo 'active';}?>">
                    <a href="partners.php">Partners</a>
                  </li>
                  <li class="<?php if(page=='contact'){echo 'active';}?>">
                    <a href="contact.php">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>

<style >


@charset "UTF-8";
.navigation {
  height: 70px;
/*   background: #262626; */
}

.brand {
  position: absolute;
  padding-left: 20px;
  float: left;
  line-height: 70px;
  text-transform: uppercase;
  font-size: 1.4em;
}
.brand a,
.brand a:visited {
  color: #ffffff;
  text-decoration: none;
}

.nav-container {
  max-width: 100%;
  margin: 0 auto;
}
.active{
  border-bottom: 3px solid white;
}
nav {
/*   float: right; */
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
nav ul li {
  float: left;
  position: relative;
}
nav ul li a,
nav ul li a:visited {
  display: block;
  padding: 0 20px;
  line-height: 70px;
  background: #069;
  color: #E8E8E8;
  text-decoration: none;
}
nav ul li a:hover,
nav ul li a:visited:hover {
  background: #2581DC;
  color: #ffffff;
}
nav ul li a:not(:only-child):after,
nav ul li a:visited:not(:only-child):after {
  padding-left: 4px;
  content: ' ▾';
}
nav ul li ul li {
  min-width: 190px;
}
nav ul li ul li a {
  padding: 15px;
  line-height: 20px;
}

.nav-dropdown, .nav-dropdown:hover {
  position: absolute;
  display: none;
  z-index: 1000;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
}

/* Mobile navigation */
.nav-mobile {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background: #262626;
  height: 70px;
  width: 70px;
}

@media only screen and (max-width: 798px) {
  .nav-mobile {
    display: block;
  }

  nav {
    width: 100%;
    padding: 70px 0 15px;
  }
  nav ul {
    display: none;
  }
  nav ul li {
    float: none;
  }
  nav ul li a {
    padding: 15px;
    line-height: 20px;
  }
  nav ul li ul li a {
    padding-left: 30px;
  }

  .nav-dropdown {
    position: static;
  }
}
@media screen and (min-width: 799px) {
  .nav-list {
    display: block !important;
  }
}
#nav-toggle {
  position: absolute;
  left: 18px;
  top: 22px;
  cursor: pointer;
  padding: 10px 35px 16px 0px;
}
#nav-toggle span,
#nav-toggle span:before,
#nav-toggle span:after {
  cursor: pointer;
  border-radius: 1px;
  height: 5px;
  width: 35px;
  background: #ffffff;
  position: absolute;
  display: block;
  content: '';
  transition: all 300ms ease-in-out;
}
#nav-toggle span:before {
  top: -10px;
}
#nav-toggle span:after {
  bottom: -10px;
}
#nav-toggle.active span {
  background-color: transparent;
}
#nav-toggle.active span:before, #nav-toggle.active span:after {
  top: 0;
}
#nav-toggle.active span:before {
  transform: rotate(45deg);
}
#nav-toggle.active span:after {
  transform: rotate(-45deg);
}

article {
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
}

.navigation {
  height: 70px;
 
}

.brand {
  position: absolute;
  padding-left: 20px;
  float: left;
  line-height: 70px;
  text-transform: uppercase;
  font-size: 1.4em;
  a,
  a:visited {
    color: #ffffff;
    text-decoration: none;
  }
}

.nav-container {
  max-width: 1000px;
  margin: 0 auto;
}

nav {
  float: right;
  ul {
    list-style: ;
    margin: 0;
    padding: 0;
    li {
      float: left;
      position: relative;
      a,
      a:visited {
        display: block;
        padding: 0 20px;
        line-height: 70px;
        background: $nav-background;
        color: #ffffff;
        text-decoration: none;
        &:hover {
          background: #2581dc;
          color: #ffffff;
        }
        &:not(:only-child):after {
          padding-left: 4px;
          content: " ▾";
        }
      } // Dropdown list
      ul li {
        min-width: 190px;
        a {
          padding: 15px;
          line-height: 20px;
        }
      }
    }
  }
}

.nav-dropdown {
  position: absolute;
  display: none;
  z-index: 100;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
}

/* Mobile navigation */

.nav-mobile {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background: $nav-background;
  height: 70px;
  width: 70px;
}
@media only screen and (max-width: 798px) {

  .nav-mobile {
    display: block;
  }
  nav {
    width: 100%;
    padding: 70px 0 15px;
    ul {
      display: none;
      li {
        float: none;
        a {
          padding: 15px;
          line-height: 20px;
        }
        ul li a {
          padding-left: 30px;
        }
      }
    }
  }
  .nav-dropdown {
    position: static;
  }
}
@media screen and (min-width: 799px) {
  .nav-list {
    display: block !important;
  }
}
#nav-toggle {
  position: absolute;
  left: 18px;
  top: 22px;
  cursor: pointer;
  padding: 10px 35px 16px 0px;
  span,
  span:before,
  span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: #ffffff;
    position: absolute;
    display: block;
    content: "";
    transition: all 300ms ease-in-out;
  }
  span:before {
    top: -10px;
  }
  span:after {
    bottom: -10px;
  }
  &.active span {
    background-color: transparent;
    &:before,
    &:after {
      top: 0;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
}

// Page content
article {
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
}
</style>