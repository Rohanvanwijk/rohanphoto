<template>
  <div>
    <HeaderMain v-on:childToParent="slideUpToggle" />
    <div class="container" :class="moveUp ? 'moveUp' : ''">
      <h1 class="blogs__title">My photographs</h1>
      <div class="blogs__container">
        <div
          v-for="blog in allBlogs"
          v-bind:key="blog.title"
          class="blogs__item"
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
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HeaderMain from "./Header.vue";

export default {
  name: "Blogs",
  computed: mapGetters(["allBlogs"]),
  components: {
    HeaderMain
  },
  data: function() {
    return {
      moveUp: false
    };
  },
  methods: {
    getPath: function(pic) {
      return `https://docs.google.com/uc?id=${pic}`;
    },
    slideUpToggle: function() {
      this.moveUp = !this.moveUp;
    }
  }
};
</script>
<style lang="scss" scroped>
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
    justify-content: space-between;
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
    margin-bottom: 2rem;
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
</style>
