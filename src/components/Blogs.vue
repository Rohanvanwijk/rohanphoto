<template>
  <div>
    <HeaderMain v-on:childToParent="slideUpToggle" />
    <div class="container" :class="moveUp ? 'moveUp' : ''">
      <h1 class="blogs__title">My photographs</h1>
      <div class="blogs__container">
        <div
          v-for="blog in allBlogs"
          v-bind:key="blog.id"
          class="blogs__item"
          @mouseover="animate($event)"
        >
          <img :src="getPath(blog.images[0].src[0])" alt="photo" />
          <router-link
            :to="{ name: 'blog', params: { title: blog.title } }"
            class="blog-link"
            pageTitle="blog.title"
            >{{ blog.title }}</router-link
          >
          <span class="blogs__date">{{ blog.date }}</span>
        </div>
        <div
          class="hover"
          :style="
            `transform: translate(${mouseX}px,${mouseY}px); width:${width}px; height:${height}px`
          "
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HeaderMain from "./Header.vue";

export default {
  name: "Blogs",
  data: function() {
    return {
      moveUp: false,
      mouseX: 0,
      mouseY: 0,
      width: 0,
      height: 0
    };
  },
  computed: mapGetters(["allBlogs"]),
  components: {
    HeaderMain
  },
  methods: {
    getPath: function(pic) {
      return `https://docs.google.com/uc?id=${pic}`;
    },
    slideUpToggle: function() {
      this.moveUp = !this.moveUp;
    },
    animate(event) {
      const padding = 10;
      const width = event.path[1].offsetWidth + padding;
      const height = event.path[1].offsetHeight + padding;
      this.width = width;
      this.height = height;
      this.mouseX = event.path[1].offsetLeft - padding / 2;
      this.mouseY = event.path[1].offsetTop - padding / 2;
    }
  }
};
</script>
<style lang="scss">
//variables
$screen-sm: 576px;
$screen-md: 768px;
$screen-xl: 992px;
$screen-lg: 1200px;

.blogs {
  &__title {
    margin-bottom: 4rem;
    font-variant: small-caps;
    text-align: center;
  }
  &__date {
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-size: 1rem;
  }
  &__container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;
    @media only screen and (min-width: $screen-md) {
      flex-direction: row;
    }
  }
  &__item {
    flex-basis: 30%;
    position: relative;
    overflow: hidden;
    max-height: 20rem;
    display: flex;
    align-items: center;
    margin: 1rem;
    @media only screen and (min-width: $screen-md) {
      flex-direction: row;
    }
    img {
      width: 100%;
    }
  }
}
.blog-link {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(white, 0.7);
  display: block;
  width: 100%;
  padding: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
}
.moveUp {
  transform: translateY(-30px);
}
.hover {
  width: 100px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
