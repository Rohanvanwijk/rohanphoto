<template>
  <div class="hero">
    <div class="center">
      <transition name="title">
        <router-link
        @mouseenter.native="elevate = true"
        @mouseleave.native="elevate = false"
        to="/blogs"
        :class="[
        'center__logo-link',
        elevate ? 'center__logo-link--elevate' : ''
        ]"
        >
        <h1 class="page-title">
          {{ HeroTitle }}
        </h1>
        </router-link>
      </transition>
      <transition name="button">
      </transition>
    </div>
    <video
    :poster="heroImage"
    autoplay = "true"
    loop = "true"
    class="img"
    >
      <source
      :src="droneVideo"
      type="video/mp4"
      />
    </video>
    <MetaData />
  </div>
</template>
<script>
import MetaData from "./MetaData.vue";

export default {
  name: "Hero",
  components: {
    MetaData
  },
  props: {
    HeroTitle: String
  },
  data: function() {
    return {
      elevate: false,
    };
  },
  computed: {
    heroImage: function() {
      return require('../assets/hero.jpg');
    },
    droneVideo: function() {
      return require('../assets/drone-italie.mp4');
    }
  }
};
</script>
<style lang="scss" scoped>
.hero {
  width: 100vw;
  height: 99vh;
  border: 3px;
  box-sizing: border-box;
  position: relative;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
.center {
  position: absolute;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  z-index: 1;
  &__logo-link {
    text-decoration: none;
    transition: transform 1s ease;
    transform: translateY(0);
    &--elevate {
      transform: translateY(-20px);
    }
  }
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
