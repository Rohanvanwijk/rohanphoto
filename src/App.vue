<template>
  <div id="app">
    <transition name="router-anim">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "./theme/global.scss";
html {
  font-size: 62.5%;
  margin: 0;
  padding: 0;
}
body {
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 99rem;
  margin: 0 auto;
  padding: 0 2rem;
  transition: transform 0.25s ease-in;
  @media only screen and (min-width: $screen-xl) {
    padding: 0;
  }
}

.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: 1.5s;
  opacity: 0;
}

.router-anim-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
