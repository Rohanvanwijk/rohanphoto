<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
html {
  font-size: 62.5%;
  margin: 0;
  padding: 0;
}
body {
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}
</style>
