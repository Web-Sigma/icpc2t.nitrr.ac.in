<template>
  <!-- Navigation -->
  <header>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark stylish-color-dark">

      <!-- Navbar brand -->
      <a class="navbar-brand" href="#">Navbar</a>

      <!-- Collapse button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
          class="navbar-toggler-icon"></span></button>

      <!-- Collapsible content -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <!-- Links -->
        <ul class="navbar-nav mr-auto">

          <!-- Dropdown -->
          <li class="nav-item dropdown">

            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">Homepages</a>

            <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">

              <a class="dropdown-item" href="../homepage/v-1.html">V1</a>

              <a class="dropdown-item" href="../homepage/v-2.html">V2</a>

              <a class="dropdown-item" href="../homepage/v-3.html">V3</a>

              <a class="dropdown-item" href="../homepage/v-4.html">V4</a>

              <a class="dropdown-item" href="../homepage/v-5.html">V5</a>

            </div>

          </li>

          <!-- Dropdown -->
          <li class="nav-item dropdown">

            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">Postpages</a>

            <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">

              <a class="dropdown-item" href="../postpage/v-1.html">V1</a>

              <a class="dropdown-item" href="../postpage/v-2.html">V2</a>

              <a class="dropdown-item" href="../postpage/v-3.html">V3</a>

              <a class="dropdown-item" href="../postpage/v-4.html">V4</a>

              <a class="dropdown-item" href="../postpage/v-5.html">V5</a>

            </div>

          </li>

        </ul>
        <!-- Links -->

        <!-- Search form -->
        <form class="form-inline">

          <div class="md-form my-0">

            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">

          </div>

        </form>

      </div>
      <!-- Collapsible content -->

    </nav>
    <!-- Navbar -->

  </header>
  <!-- Navigation -->
</template>

<script>
export default {
  name: 'Navbar',

}
</script>
