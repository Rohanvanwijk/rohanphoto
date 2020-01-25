<template>
  <header class="header">
    <div class="container header__container">
      <router-link to="/" class="header__title">Rohan Photo</router-link>
      <span class="menu">About me</span>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style scoped lang="scss">
@import "../theme/variables.scss";

.header {
  &__container {
    display: flex;
    justify-content: space-between;
    padding: 2rem 2rem;
    @media only screen and (min-width: $screen-xl) {
      padding: 2rem 0;
    }
  }
  &__title {
    text-decoration: none;
    color: black;
  }
}
.menu {
  &:hover {
    cursor: pointer;
  }
}
</style>
