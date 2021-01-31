<template>
  <div id="app">
    <b-navbar fixed="top" type="dark" variant="dark">
      <b-navbar-brand href="/">Amis Motards</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/contact">Contact</b-nav-item>
          <b-nav-item href="#">Disabled</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
