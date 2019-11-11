<template>
    <div class="blog container">
        <h1 class="blog__title">{{ blog.title }}</h1>
        <div class="blog__date">{{ blog.date }}</div>
        <div class="blog__intro">{{ blog.intro }}</div>
        <div class="blog__photos">
            <div v-for="photo in blog.images" :key="photo" class="img-container">
                <div v-if="photo.full" class="img img--full">
                    <div v-for="source in photo.src" :key="source" class="img--full__item">
                        <img :src="source" alt="full" />
                    </div>
                </div>
                <div v-else class="img img--half">
                    <div v-for="source in photo.src" :key="source" class="img--half__item">
                        <img :src="source" alt="half" />
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
            blog: this.$route.params.item
        }
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

.img--half {
    display: flex;
    justify-content: space-between;
    margin: 0 -1rem;
    &__item {
        margin: 0 1rem;
    }
}

</style>