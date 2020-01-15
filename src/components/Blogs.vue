<template>
  <div>
    <HeaderMain v-on:childToParent="slideUpToggle"  />
    <div class="banner container">
      <a href="https://partner.bol.com/click/click?p=1&amp;t=url&amp;s=1041774&amp;url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fm%2Fcomputer%2F&amp;f=BAN&amp;name=Computer&amp;subid=" target="_blank"><img src="https://www.bol.com/nl/upload/partnerprogramma/190605-computer-pp-300x250.jpg" width="300" height="250" alt="Computer"  /></a><img src="https://partner.bol.com/click/impression?p=1&amp;s=1041774&amp;t=url&amp;f=BAN&amp;name=Computer&amp;subid=" width="1" height="1" alt="Computer"/>
      <a href="https://partner.bol.com/click/click?p=1&amp;t=url&amp;s=1041774&amp;url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fl%2Fstudieboeken%2FN%2F8299%2B4273962347%2F&amp;f=BAN&amp;name=Studentenleven&amp;subid=" target="_blank"><img src="https://www.bol.com/nl/upload/partnerprogramma/302828_studentenleven_pp-500x500.jpg" width="300" height="300" alt="Studentenleven"  /></a><img src="https://partner.bol.com/click/impression?p=1&amp;s=1041774&amp;t=url&amp;f=BAN&amp;name=Studentenleven&amp;subid=" width="1" height="1" alt="Studentenleven"/>
      <a href="https://partner.bol.com/click/click?p=1&amp;t=url&amp;s=1041774&amp;url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fm%2Fsale-solden%2F&amp;f=BAN&amp;name=Sale%20(NL)&amp;subid=" target="_blank"><img src="https://www.bol.com/nl/upload/partnerprogramma/30558_SALE_pp-300x250.jpg" width="300" height="250" alt="Sale (NL)"  /></a><img src="https://partner.bol.com/click/impression?p=1&amp;s=1041774&amp;t=url&amp;f=BAN&amp;name=Sale%20(NL)&amp;subid=" width="1" height="1" alt="Sale (NL)"/>
    </div>
    <div class="container" :class="moveUp ? 'moveUp' : ''">
      <h1 class="blogs__title">My photographs</h1>
      <div class="blogs__container">
        <div v-for="blog in allBlogs" v-bind:key="blog.title" class="blogs__item">
          <img :src="getPath(blog.images[0].src[0])" alt="photo" />
          <router-link
            :to="{ name: 'blog', params: { title: blog.title } }"
            class="blog-link"
            pageTitle="blog.title"
          >{{ blog.title }}</router-link>
          <span class="blogs__date">{{ blog.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import HeaderMain from './Header.vue';

export default {
    name: 'Blogs',
    computed: mapGetters(['allBlogs']),
    components: {
      HeaderMain
    },
    data: function() {
      return {
        moveUp: false,
      }
    },
    methods: {
        getPath: function(pic) {
            return `https://docs.google.com/uc?id=${pic}`;
        },
        slideUpToggle: function() {
          this.moveUp = !this.moveUp;
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
  .banner {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media only screen and (min-width: $screen-md) {
      flex-direction: row;
    }
  }
</style>