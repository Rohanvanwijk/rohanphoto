<template>
  <div class="blog container">
    <router-link to="/blogs" class="backpage">Back to blogs</router-link>
    <h1 class="blog__title">{{ blog.title }}</h1>
    <div class="blog__date">{{ blog.date }}</div>
    <div class="blog__intro">{{ blog.intro }}</div>
    <div class="blog__photos">
      <div v-for="photo in blog.images" :key="photo.title" class="img-container">
        <div v-if="photo.full" class="img img--full">
          <div v-for="source in photo.src" :key="source" class="img--full__item">
            <img :src="getPath(source)" alt="img full" @click="ShowModal($event)" />
          </div>
        </div>
        <div v-else class="img img--half">
          <div v-for="source in photo.src" :key="source" class="img--half__item">
            <img :src="getPath(source)" alt="half" @click="ShowModal($event)" />
          </div>
        </div>
      </div>
    </div>
    <div
    @click="DismisModal($event)"
    :class="[
    'modal',
    showModal ? 'showModal' : ''
    ]">
      <img
      class="modal-image"
      :style="`width:${imgWidth};height:${imgHeight}`"
      :src="showFullSrc ? showFullSrc : 'pepper'"
      alt="modalimage" />
      <div class="modal-info">
        <p>{{ imgWidth }} x {{ imgHeight }}</p>
      </div>
      <div class="thumbnails">
        <div v-for="(item, index) in imgArray" :key="index" class="thumbnails__container">
          <img :src="getPath(item)" class="thumbnails__image">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Blog",
  data: function() {
    return {
      showFullSrc: "",
      imgArray: [],
      imgWidth: '',
      imgHeight: '',
      showModal: false,
      modalIndex: 0
    };
  },
  computed: {
    blog() {
      const title = this.$route.params.title;
      var blog = this.$store.getters.getBlogByTitle(title);
      return blog;
    }
  },
  methods: {
    getPath: function(pic) {
      return `https://docs.google.com/uc?id=${pic}`;
    },
    ShowModal: function(event) {
      /* eslint-disable no-console */
      this.showFullSrc = event.path[0].currentSrc;
      var viewPortWidth = window.innerWidth;
      var viewPortHeight = window.innerHeight;
      var imgWidth = event.path[0].naturalWidth;
      var imgHeight = event.path[0].naturalHeight;

      if (imgWidth > viewPortWidth || imgHeight > viewPortHeight) {
        this.imgWidth = '100%';
        this.imgHeight = 'auto';
      } else {
        this.imgWidth = `${imgWidth}px`;
        this.imgHeight = `${imgHeight}px`;
      }
      this.showModal = true;
      this.blog.images.forEach((item) => {
        item.src.forEach((item) => {
          this.imgArray.push(item);
        });

      });

    },
    DismisModal: function(event) {
      if (event.target.className == 'modal-image' || event.toElement.tagName == 'svg') {
        return;
      }
      this.showModal = false;
      this.imgArray = [];
    },
    changeImage(event, next) {
      this.modalIndex++;
      const img = this.imgArray[this.modalIndex];
      this.showFullSrc = `https://docs.google.com/uc?id=${img}`;
      console.log(next);
      const width = event.path[1].firstElementChild.width;
      const height = event.path[1].firstElementChild.height;
      this.imgWidth = `${width}px`;
      this.imgHeight = `${height}px`;
      console.log(event);
    }
  },
};
</script>
<style lang="scss" scoped>
.modal {
  opacity: 0;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -2;
  transition: opacity .1s ease-in;
  &-image {
    transform: scale(.5) translateY(50vh);
    transition: transform .2s;
  }
  &-info {
    position: absolute;
    bottom: 0;
    left: 0;
    p {
      margin: 1rem;
    }
  }
}
img {
  width: 100%;
}
.blog {
  padding: 0 1rem;
  @media only screen and (min-width: 900px) {
    padding: 0;
  }
  &__title {
    margin: 4rem 0;
    font-size: 3rem;
    @media only screen and (min-width: 900px) {
      font-size: 14rem;
    }
  }
  &__date {
    color: darkgray;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  &__intro {
    margin-bottom: 2rem;
  }
}

.img {
  cursor: pointer;
  margin: 1rem 0;
}
.img--full__item {
  margin: 1rem 0;
}

.img--half {
  display: flex;
  justify-content: space-between;
  margin: 1rem -1rem;
  &__item {
    margin: 0 1rem;
  }
}
.mt-2 {
  margin: 2rem 0;
}
.backpage {
  position: fixed;
  cursor: pointer;
  bottom: 2rem;
  left: 2rem;
  text-decoration: none;
  color: rgb(66, 66, 66);
  &:hover {
    color: black;
  }
}
.showModal {
  z-index: 1;
  opacity: 1;
  .modal-image {
    transform: scale(1) translateY(0);
  }
}
.icon {
  width: 8vw;
  height: 8vw;
  position: absolute;
  top: 50%;
  cursor: pointer;
  &--right {
    right: 1vw;
  }
  &--left {
    left: 1vw;
    transform: rotate(180deg);
  }
}
.thumbnails {
  max-height: 100vh;
  &__container {
    margin: 1rem 0;
    margin-left: 2rem;
    &:last-child {
      margin-bottom: 0;
    }
    &:first-child {
      margin-top: 0;
    }
  }
  &__image {
    height: 6rem;
    width: 10rem;
    object-fit: cover;
  }
}
</style>
