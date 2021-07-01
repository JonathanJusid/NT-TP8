<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>TP8 - NT2</h1>
      <br>
      <Navbar />
      <router-view></router-view>
      
    </div>
  </div>
</template>

<script>

import Navbar from './components/navbar'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: black;
}

.jumbotron {
  padding: 32px !important;
}

</style>
