<template>
  <div class="blog container">
    <div class="floating scrollup" @click="scrollToTop()" :class="{ show: isShowedUp }">Up</div>
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
      :src="showFullSrc ? showFullSrc : 'pepper'"
      alt="modalimage" />
      <div class="modal-info">
        <p>{{ imgWidth }}px x {{ imgHeight }}px</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Blog",
  data: function() {
    return {
      isShowedUp: false,
      showFullSrc: "",
      currentPos: 0,
      imgWidth: 0,
      imgHeight: 0,
      showModal: false
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
    scrollToTop: function() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    },
    handleScroll: function() {
      const x = window.scrollY;
      this.currentPos = x;
      if (x > 600) {
        this.isShowedUp = true;
      } else {
        this.isShowedUp = false;
      }
    },
    ShowModal: function(event) {
      /* eslint-disable no-console */
      this.showFullSrc = event.path[0].currentSrc;
      var viewPortWidth = window.innerWidth;
      var viewPortHeight = window.innerHeight;
      var imgWidth = event.path[0].naturalWidth;
      var imgHeight = event.path[0].naturalHeight;

      this.imgWidth = imgWidth;
      this.imgHeight = imgHeight;

      var modal = document.querySelector(".modal");
      var imgModal = modal.childNodes[0];
      imgModal.style.width = `${imgWidth}px`;
      imgModal.style.height = `${imgHeight}px`;

      if (imgWidth > viewPortWidth || imgHeight > viewPortHeight) {
        imgModal.style.width = "unset";
        imgModal.style.height = "100%";
      }
      this.showModal = true;
    },
    DismisModal: function(event) {
      if (event.target.className == "modal-image") {
        return;
      }
      var modal = document.querySelector(".modal");
      modal.removeAttribute("style");
      window.scrollTo(0, this.currentPos);
      this.showModal = false;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
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
.floating {
  opacity: 0;
  transition: opacity 1s;
  position: fixed;
  padding: 2rem;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 1px 1px 3px black;
  background-color: white;
}
.scrollup {
  bottom: 2rem;
  right: 2rem;
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
</style>
