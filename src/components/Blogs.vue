<template>
  <div class="blogs container">
    <h1 class="blogs__title">My photographs</h1>
    <div class="blogs__container">
      <div v-for="blog in allBlogs" v-bind:key="blog.title" class="blogs__item">
        <img :src="getPath(blog.images[0].src[1])" alt="photo" />
        <router-link
          :to="{ name: 'blog', params: { title: blog.title } }"
          class="blog-link"
          pageTitle="blog.title"
        >{{ blog.title }}</router-link>
        <span class="blogs__date">{{ blog.date }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Blogs',
    computed: mapGetters(['allBlogs']),
    methods: {
        getPath: function(pic) {
            return require('@/assets/images/'+pic)
        }
    }
}
</script>
<style lang="scss" scroped>
//variables
$screen-sm: 576px;
$screen-md: 768px;
$screen-xl: 992px;
$screen-lg: 1200px;

.blogs {
  padding: 0 1rem;
  margin-top: 8rem;
  @media only screen and (min-width: $screen-md) {
    padding: 0;
  }
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
    justify-content: space-evenly;
    @media only screen and (min-width: $screen-md) {
      flex-direction: row;
    }
  }
  &__item {
    flex-basis: 33.33%;
    position: relative;
    overflow: hidden;
    margin-right: 1rem;
    max-height: 20rem;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    &:nth-child(even) {
      margin-right: 0;
    }
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
</style>