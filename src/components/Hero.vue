<template>
  <div class="hero">
    <div class="center">
      <transition name="title">
        <h1 class="page-title" v-if="startAnime">
          {{ HeroTitle }}
        </h1>
      </transition>
      <transition name="button">
        <router-link
          to="/blogs"
          v-if="startAnime"
          :class="[rotate ? 'enter-website--rotate' : '', 'enter-website']"
          @mouseenter.native="rotate = !rotate"
          @mouseleave.native="rotate = !rotate"
        >
          <svg
            enable-background="new 0 0 492 492"
            version="1.1"
            viewBox="0 0 492 492"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m464.34 207.42 0.768 0.168h-329.22l103.5-103.72c5.068-5.064 7.848-11.924 7.848-19.124s-2.78-14.012-7.848-19.088l-16.104-16.112c-5.064-5.064-11.812-7.864-19.008-7.864-7.2 0-13.952 2.78-19.016 7.844l-177.41 177.4c-5.084 5.084-7.864 11.856-7.844 19.06-0.02 7.244 2.76 14.02 7.844 19.096l177.41 177.41c5.064 5.06 11.812 7.844 19.016 7.844 7.196 0 13.944-2.788 19.008-7.844l16.104-16.112c5.068-5.056 7.848-11.808 7.848-19.008 0-7.196-2.78-13.592-7.848-18.652l-104.66-104.3h329.99c14.828 0 27.288-12.78 27.288-27.6v-22.788c0-14.82-12.828-26.6-27.656-26.6z"
            />
          </svg>
        </router-link>
      </transition>
    </div>
    <img
      :src="heroImage"
      alt="Hero image"
      class="img"
      @load="startAnime = !startAnime"
    />
    <MetaData />
  </div>
</template>
<script>
import MetaData from "./MetaData.vue";

export default {
  name: "Hero",
  data: function() {
    return {
      rotate: false,
      startAnime: false
    };
  },
  components: {
    MetaData
  },
  props: {
    HeroTitle: String
  },
  computed: {
    heroImage: function() {
      return require("../assets/hero.jpg");
    }
  }
};
</script>
<style lang="scss" scoped>
.hero {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.center {
  position: absolute;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
}
.page-title {
  margin: 0;
  font-size: 7rem;
  color: white;
  text-shadow: 4px 4px #00000045;
  transition: transform 1s, opacity 0.5s;
  @media only screen and (min-width: 600px) {
    font-size: 8rem;
  }
}
.coming {
  display: none;
  position: absolute;
  bottom: 0;
  opacity: 0;
  transition: opacity 1s ease;
  left: 0;
  background-color: white;
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  &Up {
    opacity: 1;
  }
  @media only screen and (min-width: 600px) {
    display: block;
  }
}
.enter-website {
  background-color: rgba(255, 255, 255, 0.5);
  padding: 1rem;
  color: white;
  border-radius: 50%;
  font-weight: bold;
  text-decoration: none;
  transition: transform 1s, fill 0.5s;
  svg {
    width: 5rem;
    display: block;
    transform: rotate(180deg);
  }
  &--rotate {
    transform: rotate(360deg);
    fill: white;
  }
}
.title-enter {
  opacity: 0;
  transform: translateY(10px);
}
.title-enter-to {
  opacity: 1;
  animation-delay: 1s;
}
.title-leave {
  opacity: 1;
}
.title-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.button-enter {
  opacity: 0;
  transform: translateY(-10px);
}
.button-enter-to {
  opacity: 1;
  animation-delay: 1s;
}
.button-leave {
  opacity: 1;
}
.button-leave-to {
  opacity: 0;
  transform: translateY(0);
}
</style>
