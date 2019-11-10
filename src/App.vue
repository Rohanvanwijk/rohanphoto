<template>
  <div id="app">
    <Hero HeroTitle="Rohan Photo" />
  </div>
</template>

<script>
import Hero from './components/Hero.vue'

export default {
  name: 'app',
  components: {
    Hero
  }
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
</style>
