<template>
  <div class="blogs container">
    <h1>My photographs</h1>
    <div class="blogs__container">
      <div v-for="blog in allBlogs" v-bind:key="blog.title" class="blogs__item">
        <img :src="getPath(blog.images[0].src[0])" alt="photo" />
        <router-link
          :to="{ name: 'blog', params: { title: blog.title } }"
          class="blog-link"
          pageTitle="blog.title"
        >{{ blog.title }}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

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
<style lang="scss" scoped>
.blogs {
  padding: 0 1rem;
  @media only screen and (min-width: 900px) {
    padding: 0;
  }
  &__container {
    margin: 0 -2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: column;
    @media only screen and (min-width: 900px) {
      flex-direction: row;
    }
  }
  &__item {
    flex-basis: 25%;
    margin: 0;
    position: relative;
    overflow: hidden;
    max-height: 20rem;
    @media only screen and (min-width: 900px) {
      flex-direction: row;
      margin: 0 2rem;
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