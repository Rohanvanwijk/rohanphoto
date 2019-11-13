<template>
    <div class="blog container">
        <div class="scrollup" @click="scrollToTop()" :class="{ show: isShowedUp }">Up</div>
        <h1 class="blog__title">{{ blog.title }}</h1>
        <div class="blog__date">{{ blog.date }}</div>
        <div class="blog__intro">{{ blog.intro }}</div>
        <div class="blog__photos">
            <div v-for="photo in blog.images" :key="photo.title" class="img-container">
                <div v-if="photo.full" class="img img--full">
                    <div v-for="source in photo.src" :key="source" class="img--full__item">
                        <img :src="getPath(source)" alt="img full" @click="goTo($event)" />
                    </div>
                </div>
                <div v-else class="img img--half">
                    <div v-for="source in photo.src" :key="source" class="img--half__item">
                        <img :src="getPath(source)" alt="half" @click="goTo($event)" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Blog',
    data: function() {
        return {
            isShowedUp: false
        }
    },
    computed: {
        blog () {
            const title = this.$route.params.title;
            var blog = this.$store.getters.getBlogByTitle(title);
            return blog;
        },
    },
    methods: {
        getPath: function(pic) {
            return require('@/assets/images/' + pic)
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
            if(x > 600){
                this.isShowedUp = true;
            } else {
                this.isShowedUp = false;
            }
        },
        goTo: function(event) {
            const pos = event.currentTarget;
            pos.scrollIntoView();
            window.scrollBy(0, -80);
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>
<style lang="scss" scoped>
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
    &__photos {
        img {
            width: 100%;
        }
    }
}

.img {
    cursor: pointer;
}

.img--half {
    display: flex;
    justify-content: space-between;
    margin: 0 -1rem;
    &__item {
        margin: 0 1rem;
    }
}
.scrollup {
    opacity: 0;
    transition: opacity 1s;
    position: fixed;
    padding: 2rem;
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 1px 1px 3px black;
    background-color: white;
}
.show {
    opacity: 1;
}
</style>